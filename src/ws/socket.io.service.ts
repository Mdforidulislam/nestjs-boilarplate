import { PrismaService } from '@/helper/prisma.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

interface OnlineUser {
  userId: string;
  socketId: string;
  socket: Socket;
  lastSeen: Date;
  rooms: Set<string>;
}

@WebSocketGateway({
  cors: { origin: '*', methods: ['GET', 'POST'] },
  perMessageDeflate: false,
})
export class WebsocketGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private onlineUsers = new Map<string, OnlineUser>();
  private typingUsers = new Map<string, Set<string>>();

  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  afterInit(server: Server) {
    console.log('Socket.IO server initialized');
    
    // Cleanup typing indicators every 10 seconds
    setInterval(() => {
      this.cleanupTypingIndicators();
    }, 10000);
  }

  handleConnection(socket: Socket) {
    console.log('User connected:', socket.id);
  }

  handleDisconnect(socket: Socket) {
    const userId = socket.data.userId as string;
    if (userId) {
      const user = this.onlineUsers.get(userId);
      if (user) {
        // Leave all rooms
        user.rooms.forEach(roomId => {
          socket.leave(roomId);
        });
        
        this.onlineUsers.delete(userId);
        this.removeFromAllTyping(userId);
        this.broadcastUserStatus(userId, false);
      }
    }
    console.log('User disconnected:', socket.id);
  }

  @SubscribeMessage('authenticate')
  async handleAuthenticate(@ConnectedSocket() socket: Socket) {
    const token = socket.handshake.headers['authorization'];
    console.log('token', token);
    if (!token) {
      socket.disconnect(true);
      return;
    }

    try {
      const user = await this.jwtService.verifyAsync(token);
      const userId = user.id;
      socket.data.userId = userId;
      
      const userRooms = new Set<string>();
      this.onlineUsers.set(userId, {
        userId,
        socketId: socket.id,
        socket,
        lastSeen: new Date(),
        rooms: userRooms
      });

      // Join user's personal notification room
      socket.join(`user_${userId}`);

      // Auto-join user to their rooms
      await this.autoJoinUserRooms(socket, userId, userRooms);

      this.broadcastUserStatus(userId, true);
      socket.emit('authenticated', { 
        userId, 
        message: 'Successfully authenticated',
        rooms: Array.from(userRooms)
      });

      console.log(`User ${userId} authenticated and joined ${userRooms.size} rooms`);
    } catch (err) {
      console.error('Authentication error:', err);
      socket.disconnect(true);
    }
  }

  @SubscribeMessage('sendMessage')
  async handleMessage(
    @MessageBody() payload: {
      roomId: string;
      message: string;
      images?: string[];
      replyToId?: string;
    },
    @ConnectedSocket() socket: Socket,
  ) {
    const userId = socket.data.userId as string;
    const { roomId, message, images = [], replyToId } = payload;

    if (!userId || !roomId || !message.trim()) {
      socket.emit('error', { message: 'Invalid message data' });
      return;
    }

    try {
      // Verify user access
      const roomUser = await this.prisma.roomUser.findFirst({
        where: { roomId, userId },
        include: { room: true }
      });

      if (!roomUser) {
        socket.emit('error', { message: 'Access denied to room' });
        return;
      }

      // For SINGLE rooms, get receiver
      let receiverId = userId; // Default to sender
      if (roomUser.room.type === 'SINGLE') {
        const otherMember = await this.prisma.roomUser.findFirst({
          where: { roomId, userId: { not: userId } }
        });
        receiverId = otherMember?.userId || userId;
      }

      // Create message in database
      const chatMessage = await this.prisma.chat.create({
        data: {
          senderId: userId,
          receiverId,
          roomId,
          message: message.trim(),
          images: { set: images },
          replyToId,
          messageType: images.length > 0 ? 'FILE' : 'TEXT',
        },
        include: {
          sender: { select: { id: true, username: true, avatar: true } },
          reciver: { select: { id: true, username: true, avatar: true } },
          file: true,
        },
      });

      // Stop typing indicator
      this.handleStopTyping({ roomId }, socket);

      // Broadcast message to room members
      this.server.to(roomId).emit('newMessage', {
        ...chatMessage,
        timestamp: chatMessage.createdAt,
      });

      // Update room's last activity
      await this.prisma.room.update({
        where: { id: roomId },
        data: { updatedAt: new Date() },
      });

      console.log(`Message sent in room ${roomId} by user ${userId}`);
    } catch (error) {
      console.error('Send message error:', error);
      socket.emit('error', { message: 'Failed to send message' });
    }
  }

  @SubscribeMessage('typing')
  async handleTyping(
    @MessageBody() payload: { roomId: string },
    @ConnectedSocket() socket: Socket,
  ) {
    const userId = socket.data.userId as string;
    const { roomId } = payload;

    if (!userId || !roomId) return;

    // Add user to typing set for this room
    if (!this.typingUsers.has(roomId)) {
      this.typingUsers.set(roomId, new Set());
    }
    this.typingUsers.get(roomId)!.add(userId);

    // Get user info
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, username: true },
    });

    // Broadcast typing to other room members
    socket.to(roomId).emit('userTyping', {
      userId,
      username: user?.username,
      roomId,
    });
  }

  @SubscribeMessage('stopTyping')
  async handleStopTyping(
    @MessageBody() payload: { roomId: string },
    @ConnectedSocket() socket: Socket,
  ) {
    const userId = socket.data.userId as string;
    const { roomId } = payload;

    if (!userId || !roomId) return;

    // Remove user from typing set
    if (this.typingUsers.has(roomId)) {
      this.typingUsers.get(roomId)!.delete(userId);
      
      if (this.typingUsers.get(roomId)!.size === 0) {
        this.typingUsers.delete(roomId);
      }
    }

    // Broadcast stop typing to other room members
    socket.to(roomId).emit('userStoppedTyping', {
      userId,
      roomId,
    });
  }

  @SubscribeMessage('joinRoom')
  async handleJoinRoom(
    @MessageBody() payload: { roomId: string },
    @ConnectedSocket() socket: Socket,
  ) {
    const userId = socket.data.userId as string;
    const { roomId } = payload;

    if (!userId || !roomId) {
      socket.emit('error', { message: 'Missing userId or roomId' });
      return;
    }

    try {
      // Verify user has access to room
      const roomUser = await this.prisma.roomUser.findFirst({
        where: { userId, roomId },
        include: { room: true },
      });

      if (!roomUser) {
        socket.emit('error', { message: 'Room not found or access denied' });
        return;
      }

      socket.join(roomId);
      
      // Update user's room list
      const user = this.onlineUsers.get(userId);
      if (user) {
        user.rooms.add(roomId);
      }

      socket.emit('joinedRoom', {
        roomId,
        roomName: roomUser.room.name,
        roomType: roomUser.room.type,
        message: 'Successfully joined room',
      });

      // Notify other room members
      socket.to(roomId).emit('userJoinedRoom', {
        userId,
        roomId,
        timestamp: new Date(),
      });

      console.log(`User ${userId} joined room ${roomId}`);
    } catch (error) {
      console.error('Join room error:', error);
      socket.emit('error', { message: 'Failed to join room' });
    }
  }

  @SubscribeMessage('leaveRoom')
  async handleLeaveRoom(
    @MessageBody() payload: { roomId: string },
    @ConnectedSocket() socket: Socket,
  ) {
    const userId = socket.data.userId as string;
    const { roomId } = payload;

    if (!userId || !roomId) return;

    socket.leave(roomId);
    
    // Update user's room list
    const user = this.onlineUsers.get(userId);
    if (user) {
      user.rooms.delete(roomId);
    }

    socket.emit('leftRoom', { roomId });

    // Notify other room members
    socket.to(roomId).emit('userLeftRoom', {
      userId,
      roomId,
      timestamp: new Date(),
    });

    console.log(`User ${userId} left room ${roomId}`);
  }

  @SubscribeMessage('markAsRead')
  async handleMarkAsRead(
    @MessageBody() payload: { roomId: string; messageIds?: string[] },
    @ConnectedSocket() socket: Socket,
  ) {
    const userId = socket.data.userId as string;
    const { roomId, messageIds } = payload;

    if (!userId || !roomId) return;

    try {
      let readMessages;
      
      if (messageIds && messageIds.length > 0) {
        // Mark specific messages as read
        const readData = messageIds.map(messageId => ({
          messageId,
          userId,
          readAt: new Date(),
        }));
        
        await this.prisma.messageRead.createMany({
          data: readData,
        });
        
        readMessages = messageIds;
      } else {
        // Mark all unread messages in room as read
        const unreadMessages = await this.prisma.chat.findMany({
          where: {
            roomId,
            senderId: { not: userId },
            messageRead: { none: { userId } },
          },
          select: { id: true },
        });

        if (unreadMessages.length > 0) {
          const readData = unreadMessages.map(msg => ({
            messageId: msg.id,
            userId,
            readAt: new Date(),
          }));

          await this.prisma.messageRead.createMany({
            data: readData,
          });

          readMessages = unreadMessages.map(msg => msg.id);
        }
      }

      // Notify room members about read status
      if (readMessages && readMessages.length > 0) {
        socket.to(roomId).emit('messagesRead', {
          userId,
          messageIds: readMessages,
          readAt: new Date(),
        });
      }

      socket.emit('markedAsRead', {
        roomId,
        messageIds: readMessages,
      });
    } catch (error) {
      console.error('Mark as read error:', error);
      socket.emit('error', { message: 'Failed to mark messages as read' });
    }
  }

  @SubscribeMessage('getRoomMessages')
  async handleGetRoomMessages(
    @MessageBody() payload: { roomId: string; page?: number; limit?: number },
    @ConnectedSocket() socket: Socket,
  ) {
    const userId = socket.data.userId as string;
    const { roomId, page = 1, limit = 50 } = payload;

    if (!userId || !roomId) {
      socket.emit('error', { message: 'Missing required parameters' });
      return;
    }

    try {
      // Verify access
      const roomUser = await this.prisma.roomUser.findFirst({
        where: { userId, roomId },
      });

      if (!roomUser) {
        socket.emit('error', { message: 'Access denied to room' });
        return;
      }

      const skip = (page - 1) * limit;
      const messages = await this.prisma.chat.findMany({
        where: { roomId, isDeleted: false },
        include: {
          sender: { select: { id: true, username: true, avatar: true } },
          reciver: { select: { id: true, username: true, avatar: true } },
          file: true,
          messageRead: {
            include: {
              user: { select: { id: true, username: true } }
            }
          }
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      });

      const total = await this.prisma.chat.count({
        where: { roomId, isDeleted: false },
      });

      socket.emit('roomMessages', {
        roomId,
        messages: messages.reverse(),
        pagination: {
          page,
          limit,
          total,
          hasMore: skip + messages.length < total,
        },
      });
    } catch (error) {
      console.error('Get room messages error:', error);
      socket.emit('error', { message: 'Failed to fetch messages' });
    }
  }

  @SubscribeMessage('getOnlineUsers')
  async handleGetOnlineUsers(
    @MessageBody() payload: { roomId?: string },
    @ConnectedSocket() socket: Socket,
  ) {
    const { roomId } = payload;

    try {
      let onlineUsersList;

      if (roomId) {
        // Get online users in specific room
        const roomMembers = await this.prisma.roomUser.findMany({
          where: { roomId },
          include: {
            user: { select: { id: true, username: true, avatar: true } }
          }
        });

        onlineUsersList = roomMembers
          .filter(member => this.onlineUsers.has(member.userId))
          .map(member => ({
            ...member.user,
            role: member.role,
            lastSeen: this.onlineUsers.get(member.userId)?.lastSeen,
            isOnline: true
          }));
      } else {
        // Get all online users
        const userIds = Array.from(this.onlineUsers.keys());
        const users = await this.prisma.user.findMany({
          where: { id: { in: userIds } },
          select: { id: true, username: true, avatar: true }
        });

        onlineUsersList = users.map(user => ({
          ...user,
          lastSeen: this.onlineUsers.get(user.id)?.lastSeen,
          isOnline: true
        }));
      }

      socket.emit('onlineUsers', {
        roomId: roomId || 'global',
        users: onlineUsersList,
      });
    } catch (error) {
      console.error('Get online users error:', error);
      socket.emit('error', { message: 'Failed to get online users' });
    }
  }

  @SubscribeMessage('deleteMessage')
  async handleDeleteMessage(
    @MessageBody() payload: { messageId: string },
    @ConnectedSocket() socket: Socket,
  ) {
    const userId = socket.data.userId as string;
    const { messageId } = payload;

    if (!userId || !messageId) return;

    try {
      const message = await this.prisma.chat.findUnique({
        where: { id: messageId },
        select: { senderId: true, roomId: true },
      });

      if (!message) {
        socket.emit('error', { message: 'Message not found' });
        return;
      }

      if (message.senderId !== userId) {
        socket.emit('error', { message: 'Can only delete your own messages' });
        return;
      }

      // Soft delete message
      await this.prisma.chat.update({
        where: { id: messageId },
        data: { isDeleted: true },
      });

      // Notify room members
      this.server.to(message.roomId).emit('messageDeleted', {
        messageId,
        deletedBy: userId,
        timestamp: new Date(),
      });
    } catch (error) {
      console.error('Delete message error:', error);
      socket.emit('error', { message: 'Failed to delete message' });
    }
  }

  @SubscribeMessage('editMessage')
  async handleEditMessage(
    @MessageBody() payload: { messageId: string; newMessage: string },
    @ConnectedSocket() socket: Socket,
  ) {
    const userId = socket.data.userId as string;
    const { messageId, newMessage } = payload;

    if (!userId || !messageId || !newMessage.trim()) return;

    try {
      const message = await this.prisma.chat.findUnique({
        where: { id: messageId },
        select: { senderId: true, roomId: true },
      });

      if (!message) {
        socket.emit('error', { message: 'Message not found' });
        return;
      }

      if (message.senderId !== userId) {
        socket.emit('error', { message: 'Can only edit your own messages' });
        return;
      }

      // Update message
      const updatedMessage = await this.prisma.chat.update({
        where: { id: messageId },
        data: {
          message: newMessage.trim(),
          isEdited: true,
          updatedAt: new Date(),
        },
        include: {
          sender: { select: { id: true, username: true, avatar: true } },
          reciver: { select: { id: true, username: true, avatar: true } },
        },
      });

      // Notify room members
      this.server.to(message.roomId).emit('messageEdited', {
        ...updatedMessage,
        timestamp: updatedMessage.createdAt,
      });
    } catch (error) {
      console.error('Edit message error:', error);
      socket.emit('error', { message: 'Failed to edit message' });
    }
  }

  @SubscribeMessage('fileUploadProgress')
  async handleFileUploadProgress(
    @MessageBody() payload: { roomId: string; fileName: string; progress: number },
    @ConnectedSocket() socket: Socket,
  ) {
    const userId = socket.data.userId as string;
    const { roomId, fileName, progress } = payload;

    if (!userId || !roomId) return;

    // Broadcast upload progress to room members
    socket.to(roomId).emit('fileUploadProgress', {
      userId,
      fileName,
      progress,
      roomId,
    });
  }

  @SubscribeMessage('getRecentConversations')
  async handleGetRecentConversations(@ConnectedSocket() socket: Socket) {
    const userId = socket.data.userId as string;

    if (!userId) return;

    try {
      const conversations = await this.prisma.roomUser.findMany({
        where: { userId },
        include: {
          room: {
            include: {
              chat: {
                orderBy: { createdAt: 'desc' },
                take: 1,
                include: {
                  sender: { select: { id: true, username: true, avatar: true } }
                }
              },
              roomUsers: {
                include: {
                  user: { select: { id: true, username: true, avatar: true } }
                }
              },
              _count: { select: { chat: true } }
            }
          }
        },
        orderBy: { room: { updatedAt: 'desc' } }
      });

      // Get unread counts
      const conversationsWithUnread = await Promise.all(
        conversations.map(async (conv) => {
          const unreadCount = await this.prisma.chat.count({
            where: {
              roomId: conv.roomId,
              senderId: { not: userId },
              messageRead: { none: { userId } }
            }
          });

          return {
            room: conv.room,
            userRole: conv.role,
            lastMessage: conv.room.chat[0] || null,
            unreadCount,
            totalMessages: conv.room._count.chat,
            members: conv.room.roomUsers.map(ru => ru.user)
          };
        })
      );

      socket.emit('recentConversations', {
        conversations: conversationsWithUnread
      });
    } catch (error) {
      console.error('Get recent conversations error:', error);
      socket.emit('error', { message: 'Failed to fetch conversations' });
    }
  }

  // Utility Methods
  private async autoJoinUserRooms(socket: Socket, userId: string, userRooms: Set<string>) {
    try {
      const roomUsers = await this.prisma.roomUser.findMany({
        where: { userId },
        select: { roomId: true },
      });

      for (const roomUser of roomUsers) {
        socket.join(roomUser.roomId);
        userRooms.add(roomUser.roomId);
      }

      console.log(`User ${userId} auto-joined ${roomUsers.length} rooms`);
    } catch (error) {
      console.error('Auto-join rooms error:', error);
    }
  }

  private broadcastUserStatus(userId: string, isOnline: boolean) {
    this.server.emit('userStatusChanged', {
      userId,
      isOnline,
      timestamp: new Date(),
    });
  }

  private removeFromAllTyping(userId: string) {
    for (const [roomId, typingSet] of this.typingUsers.entries()) {
      if (typingSet.has(userId)) {
        typingSet.delete(userId);
        if (typingSet.size === 0) {
          this.typingUsers.delete(roomId);
        }
        
        // Notify room that user stopped typing
        this.server.to(roomId).emit('userStoppedTyping', { userId, roomId });
      }
    }
  }

  private cleanupTypingIndicators() {
    // Remove empty typing sets
    for (const [roomId, typingSet] of this.typingUsers.entries()) {
      if (typingSet.size === 0) {
        this.typingUsers.delete(roomId);
      }
    }
  }

  // Public methods for external services
  public notifyFileUpload(roomId: string, fileMessage: any, uploaderId: string) {
    this.server.to(roomId).emit('fileUploaded', {
      ...fileMessage,
      timestamp: fileMessage.createdAt,
    });
  }

  public notifyRoomUpdate(roomId: string, updateData: any) {
    this.server.to(roomId).emit('roomUpdated', updateData);
  }

  public notifyUserAddedToRoom(roomId: string, newUserId: string, addedByUserId: string) {
    this.server.to(roomId).emit('userAddedToRoom', {
      roomId,
      newUserId,
      addedBy: addedByUserId,
      timestamp: new Date(),
    });

    // Notify the new user if they're online
    const newUserSocket = this.onlineUsers.get(newUserId);
    if (newUserSocket) {
      newUserSocket.socket.join(roomId);
      newUserSocket.rooms.add(roomId);
      newUserSocket.socket.emit('addedToRoom', {
        roomId,
        addedBy: addedByUserId,
        timestamp: new Date(),
      });
    }
  }

  public notifyUserRemovedFromRoom(roomId: string, removedUserId: string, removedByUserId: string) {
    this.server.to(roomId).emit('userRemovedFromRoom', {
      roomId,
      removedUserId,
      removedBy: removedByUserId,
      timestamp: new Date(),
    });

    // Make the removed user leave the room
    const removedUserSocket = this.onlineUsers.get(removedUserId);
    if (removedUserSocket) {
      removedUserSocket.socket.leave(roomId);
      removedUserSocket.rooms.delete(roomId);
      removedUserSocket.socket.emit('removedFromRoom', {
        roomId,
        removedBy: removedByUserId,
        timestamp: new Date(),
      });
    }
  }
}
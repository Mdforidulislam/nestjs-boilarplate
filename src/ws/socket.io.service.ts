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

@WebSocketGateway({
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
  perMessageDeflate: false,
})

export class WebsocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  private onlineUsers = new Set<string>();
  private userSockets = new Map<string, Socket>();

  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  afterInit(server: Server) {
    // Handle global connect_error
    console.log('Socket.IO server initialized');

    server.of('/').on('connect_error', (err: any) => {
      console.error(
        'Connection error:',
        err.message,
        err.description,
        err.context,
      );
    });
  }

  handleConnection(socket: Socket) {
    console.log('A user connected:', socket.id);
  }

  handleDisconnect(socket: Socket) {
    const userId = socket.data.userId as string;
    if (userId) {
      this.onlineUsers.delete(userId);
      this.userSockets.delete(userId);
      this.server.emit('status', { userId, isOnline: false });
    }
    console.log('User disconnected:', socket.id);
  }

  @SubscribeMessage('authenticate')
  async handleAuthenticate(
    @MessageBody() payload: { token: string },
    @ConnectedSocket() socket: Socket,
  ) {
    const { token } = payload;

    if (!token) {
      socket.disconnect(true);
      return;
    }
    try {
      const user = await this.jwtService.verifyAsync(token);

      console.log(`see payload`, user);

      if (!user) throw new Error('Invalid token');

      const userId = (user as any).id;
      socket.data.userId = userId;

      this.onlineUsers.add(userId);
      this.userSockets.set(userId, socket);

      console.log(`see user`, user);

      this.server.emit('status', { userId, isOnline: true });
      console.log(`User ${userId} authenticated`);
    } catch (err) {
      console.error('Authentication error:', err);
      socket.disconnect(true);
    }
  }

  @SubscribeMessage('joinRoom')
  async handleJoinRoom(
    @MessageBody() payload: { roomId: string },
    @ConnectedSocket() socket: Socket,
  ) {
    const userId = socket.data.userId as string;
    const { roomId } = payload;
    if (!userId || !roomId) return;

    const room = await this.prisma.room.findUnique({ where: { id: roomId } });

    if (!room) {
      socket.emit('error', { message: 'Room not found' });
      return;
    }

    try {
      const isUserAlreadyExistsInRoom = await this.prisma.roomUser.findFirst({
        where: { userId, roomId },
      });

      socket.join(roomId);

      if (isUserAlreadyExistsInRoom) {
        await this.prisma.roomUser.create({
          data: { userId, roomId },
        });

        socket.emit('alreadyInRoom', {
          roomId,
          message: 'You are already in this room',
        });
      } else {
        socket.emit('joinedRoom', {
          roomId,
          message: 'Successfully joined the room',
        });
      }

      console.log(`User ${userId} joined room ${roomId}`);
    } catch (error: any) {
      console.error(error);
      socket.emit('error', { message: 'Failed to join the room' });
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

    const room = await this.prisma.room.findUnique({ where: { id: roomId } });
    if (!room) {
      socket.emit('error', { message: 'Room not found' });
      return;
    }

    await this.prisma.roomUser.deleteMany({ where: { userId, roomId } });
    socket.leave(roomId);
    socket.emit('leftRoom', { roomId, message: 'Successfully left the room' });
    console.log(`User ${userId} left room ${roomId}`);
  }

  @SubscribeMessage('message')
  async handleMessage(
    @MessageBody()
    payload: { roomId: string; message: string; images?: string[] },
    @ConnectedSocket() socket: Socket,
  ) {
    const userId = socket.data.userId as string;
    const { roomId, message, images } = payload;
    if (!userId || !roomId || !message) return;

    const room = await this.prisma.room.findUnique({ where: { id: roomId } });
    if (!room) return;

    const chat = await this.prisma.chat.create({
      data: {
        senderId: userId,
        roomId,
        message,

        images: { set: images || [] },
      } as any
    });

    const participants = await this.prisma.roomUser.findMany({
      where: { roomId },
      select: { userId: true },
    });

    participants.forEach(({ userId: participantId }) => {
      const participantSocket = this.userSockets.get(participantId);
      if (participantSocket) {
        participantSocket.emit('message', chat);
      }
    });

    // echo back to sender
    socket.emit('message', chat);
  }

  @SubscribeMessage('fetchChats')
  async handleFetchChats(
    @MessageBody() payload: { roomId: string },
    @ConnectedSocket() socket: Socket,
  ) {
    const userId = socket.data.userId as string;
    const { roomId } = payload;
    if (!userId || !roomId) return;

    const room = await this.prisma.room.findUnique({ where: { id: roomId } });
    if (!room) {
      socket.emit('noRoomFound');
      return;
    }

    const chats = await this.prisma.chat.findMany({
      where: { roomId },
      orderBy: { createdAt: 'asc' },
      include: {
        sender: { select: { id: true, username: true, avatar: true } },
      },
    });

    await this.prisma.chat.updateMany({
      where: { roomId, receiverId: userId },
      data: { isRead: true },
    });

    socket.emit('fetchChats', chats);
  }

  @SubscribeMessage('messageList')
  async handleMessageList(@ConnectedSocket() socket: Socket) {
    const userId = socket.data.userId as string;
    if (!userId) return;

    try {
      const rooms = await this.prisma.roomUser.findMany({
        where: { userId },
        include: {
          room: {
            include: { chat: { orderBy: { createdAt: 'desc' }, take: 1 } } as any
          },
        },
      });

      const result = rooms
        .map(({ room }) => ({
          roomId: room.id,
          groupImage: room.img,
          groupName: room.name,
          groupDescription: room.description,
          lastMessage: room.chat[0] || null,
        }))
        .sort((a, b) => {
          if (!a.lastMessage || !b.lastMessage) return 0;
          return (
            new Date(b as any).getTime() -
            new Date(a as any).getTime()
          );
        });

      socket.emit('messageList', result);
    } catch (error) {
      console.error('Failed to fetch message list', error);
      socket.emit('error', {
        message: 'Failed to fetch users with last messages',
      });
    }
  }
}

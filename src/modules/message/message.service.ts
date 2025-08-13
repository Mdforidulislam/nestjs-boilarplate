import { PrismaService } from '@/helper/prisma.service';
import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';

import { RoomType, MemberType, FileType } from '@prisma/client';
import { AddUserToRoomDto, CreateRoomDto } from './dto/create-message.dto';

@Injectable()
export class ChatRoomService {
  constructor(private readonly prisma: PrismaService) {}

  async getMessageHistory(roomId: string, userId: string, query: Record<string, any>) {
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 50;

    const roomUser = await this.prisma.roomUser.findUnique({
      where: { roomId_userId: { roomId, userId } },
    });
    if (!roomUser) {
      throw new ForbiddenException('You are not a member of this room');
    }

    const skip = (page - 1) * limit;
    const [messages, totalCount] = await Promise.all([
      this.prisma.chat.findMany({
        where: { roomId, isDeleted: false },
        include: {
          sender: { select: { id: true, email: true, avatar: true } },
          reciver: { select: { id: true, email: true, avatar: true } },
          file: true,
          messageRead: { where: { userId } },
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.chat.count({ where: { roomId, isDeleted: false } }),
    ]);

    return {
      messages: messages.reverse(),
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        totalMessages: totalCount,
        hasNextPage: skip + limit < totalCount,
        hasPrevPage: page > 1,
      },
    };
  }

  async createRoom(createRoomDto: CreateRoomDto, imagePath: string, userId: string) {
    const { name, description, type } = createRoomDto;

    const creator = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!creator) {
      throw new NotFoundException('Creator user not found');
    }

    const result = await this.prisma.$transaction(async (tx) => {
      const room = await tx.room.create({
        data: {
          name,
          description,
          type: type as RoomType || RoomType.GROUP,
          img: imagePath,
          createdBy: userId,
        },
        include: { creator: { select: { id: true, email: true, avatar: true } } },
      });

      await tx.roomUser.create({
        data: { roomId: room.id, userId, role: MemberType.ADMIN },
      });

      return room;
    });

    return result;
  }

  async addUserToRoom(roomId: string, addUserDto: AddUserToRoomDto) {
    const { userId, addedBy, role = MemberType.MEMEBER } = addUserDto;

    const room = await this.prisma.room.findUnique({ where: { id: roomId } });
    if (!room) {
      throw new NotFoundException('Room not found');
    }

    const adderPermission = await this.prisma.roomUser.findUnique({
      where: { roomId_userId: { roomId, userId: addedBy } },
    });
    if (!adderPermission || (adderPermission.role !== MemberType.ADMIN && adderPermission.role !== MemberType.MEMEBER)) {
      throw new ForbiddenException('You do not have permission to add users');
    }

    const existingMember = await this.prisma.roomUser.findUnique({
      where: { roomId_userId: { roomId, userId } },
    });
    if (existingMember) {
      throw new ForbiddenException('User is already a member of this room');
    }

    const roomUser = await this.prisma.roomUser.create({
      data: { roomId, userId, role },
      include: {
        user: { select: { id: true,  email: true, avatar: true } },
        room: { select: { id: true,  type: true } },
      },
    });

    return roomUser;
  }

  async deleteRoom(roomId: string, userId: string) {
    const room = await this.prisma.room.findUnique({
      where: { id: roomId },
      include: { roomUsers: { where: { userId, role: MemberType.ADMIN } } },
    });

    if (!room) {
      throw new NotFoundException('Room not found');
    }

    if (room.roomUsers.length === 0 && room.createdBy !== userId) {
      throw new ForbiddenException('Only room creator or admin can delete room');
    }

    await this.prisma.$transaction([
      this.prisma.messageRead.deleteMany({ where: { message: { roomId } } }),
      this.prisma.chat.deleteMany({ where: { roomId } }),
      this.prisma.uploadedFile.deleteMany({ where: { roomId } }),
      this.prisma.roomUser.deleteMany({ where: { roomId } }),
      this.prisma.room.delete({ where: { id: roomId } }),
    ]);

    return { message: 'Room deleted successfully' };
  }

  async uploadFile(roomId: string, uploadedBy: string, files: string[]) {
    const roomUser = await this.prisma.roomUser.findUnique({
      where: { roomId_userId: { roomId, userId: uploadedBy } },
    });
    if (!roomUser) {
      throw new ForbiddenException('You are not a member of this room');
    }

    const uploadedFile = await this.prisma.uploadedFile.createMany({ 
      data:{
        ...files
      }as any
     });

    return uploadedFile;
  }

  async getRoomDetails(roomId: string, userId: string) {
    const roomUser = await this.prisma.roomUser.findUnique({
      where: { roomId_userId: { roomId, userId } },
    });
    if (!roomUser) {
      throw new ForbiddenException('You are not a member of this room');
    }

    const room = await this.prisma.room.findUnique({
      where: { id: roomId },
      include: {
        creator: { select: { id: true,  email: true, avatar: true } },
        roomUsers: {
          include: { user: { select: { id: true, email: true, avatar: true } } },
        },
        _count: { select: { chat: { where: { isDeleted: false } } } },
      },
    });

    if (!room) {
      throw new NotFoundException('Room not found');
    }

    return room;
  }

  async getUserRooms(userId: string) {
    const rooms = await this.prisma.roomUser.findMany({
      where: { userId },
      include: {
        room: {
          include: {
            creator: { select: { id: true, email: true, avatar: true } },
            _count: { select: { roomUsers: true, chat: { where: { isDeleted: false } } } },
          },
        },
      },
      orderBy: { updatedAt: 'desc' },
    });

    return rooms;
  }

  private getFileType(mimeType: string): FileType {
    if (mimeType.startsWith('image/')) return FileType.IMAGE;
    if (mimeType.startsWith('video/')) return FileType.VIDEO;
    if (mimeType.startsWith('audio/')) return FileType.AUDIO;
    return FileType.FILE;
  }
}
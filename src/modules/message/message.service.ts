// message.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { PrismaService } from '@/helper/prisma.service';
import QueryBuilder from '@/utils/queryBuilder';


@Injectable()
export class MessageService {
  constructor(private readonly prisma: PrismaService) {}

  // Create a new message
  async create(createMessageDto: CreateMessageDto) {
    const { roomId, senderId, receiverId, message, images, isRead } = createMessageDto;
    
    const newMessage = await this.prisma.chat.create({
      data: {
        roomId,
        senderId,
        receiverId,
        message,
        images: images || [],
        isRead: isRead || false,
      },
    });
    return newMessage;
  }

  // Get all messages for a specific room
  async findAll(query: Record<string, any>) {
        const queryBuilder = new QueryBuilder(query, this.prisma.chat);
        const result = await queryBuilder
          .filter()
          .search([])
          .nestedFilter([])
          .sort()
          .paginate()
          .include({})
          .fields()
          .filterByRange([])
          .execute();
    
        const meta = await queryBuilder.countTotal();
    
        return { meta, data: result };
  }

  // Get a single message by ID
  async findOne(id: string) {
    const message = await this.prisma.chat.findUnique({
      where: { id },
    });

    if (!message) {
      throw new NotFoundException(`Message with ID ${id} not found`);
    }

    return message;
  }

  // Update a message
  async update(id: string, updateMessageDto: UpdateMessageDto) {
    const message = await this.prisma.chat.findUnique({
      where: { id },
    });

    if (!message) {
      throw new NotFoundException(`Message with ID ${id} not found`);
    }

    const updatedMessage = await this.prisma.chat.update({
      where: { id },
      data: updateMessageDto,
    });

    return updatedMessage;
  }

  // Mark a message as read
  async markAsRead(id: string, userId: string) {
    const messageRead = await this.prisma.messageRead.create({
      data: {
        messageId: id,
        userId,
        readAt: new Date(),
      },
    });

    return messageRead;
  }

  // Delete a message
  async remove(id: string) {
    const message = await this.prisma.chat.findUnique({
      where: { id },
    });

    if (!message) {
      throw new NotFoundException(`Message with ID ${id} not found`);
    }

    await this.prisma.chat.delete({
      where: { id },
    });

    return { message: 'Message deleted successfully' };
  }
}

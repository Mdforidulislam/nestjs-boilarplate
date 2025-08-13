import { Module } from '@nestjs/common';

import { PrismaService } from '@/helper/prisma.service';
import { ChatRoomController } from './message.controller';
import { ChatRoomService } from './message.service';

@Module({
  controllers: [ChatRoomController],
  providers: [ChatRoomService,PrismaService],
})
export class MessageModule {}

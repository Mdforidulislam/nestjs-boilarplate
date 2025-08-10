import { Module } from '@nestjs/common';
import { TaskApplicationService } from './task_application.service';
import { TaskApplicationController } from './task_application.controller';
import { PrismaService } from '@/helper/prisma.service';
import { PrismaHelperService } from '@/utils/is_existance';

@Module({
  controllers: [TaskApplicationController],
  providers: [TaskApplicationService, PrismaService, PrismaHelperService],
})
export class TaskApplicationModule {}

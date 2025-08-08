import { Module } from '@nestjs/common';
import { TaskCategoryService } from './task_category.service';
import { TaskCategoryController } from './task_category.controller';
import { PrismaService } from '@/helper/prisma.service';
import { PrismaHelperService } from '@/utils/is_existance';

@Module({
  controllers: [TaskCategoryController],
  providers: [TaskCategoryService, PrismaService, PrismaHelperService],
})
export class TaskCategoryModule {}

import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { TaskCategoryService } from './task_category.service';
import { CreateTaskCategoryDto } from './dto/create-task_category.dto';
import { UpdateTaskCategoryDto } from './dto/update-task_category.dto';
import { ResponseService } from '@/utils/response';
import { Roles } from '../auth/roles.decorator';
import { Role } from '@prisma/client';

@Controller('task-category')
export class TaskCategoryController {
  constructor(private readonly taskCategoryService: TaskCategoryService) {}

  @Post()
  @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  
   async createCategory(@Body() createCategory: CreateTaskCategoryDto) {
      const result = await this.taskCategoryService.create(createCategory);
      return ResponseService.formatResponse({
        statusCode: HttpStatus.OK,
        message: 'Task Management Created Successfully',
        data: result
      })
    }
  
  @Get()
  findAll() {
    return this.taskCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskCategoryDto: UpdateTaskCategoryDto) {
    return this.taskCategoryService.update(+id, updateTaskCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskCategoryService.remove(+id);
  }
}

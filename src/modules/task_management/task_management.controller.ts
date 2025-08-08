import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { TaskManagementService } from './task_management.service';
import { createCategoryDto, CreateTaskManagementDto } from './dto/create-task_management.dto';
import { UpdateTaskManagementDto } from './dto/update-task_management.dto';
import { ResponseService } from '@/utils/response';

@Controller('task-management')
export class TaskManagementController {
  constructor(private readonly taskManagementService: TaskManagementService) {}

@Post()
 async create(@Body() createTaskManagementDto: CreateTaskManagementDto) {
    const result = await this.taskManagementService.create(createTaskManagementDto);
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: 'Task Management Created Successfully',
      data: result
    })
  }
 

@Get()
 async findAll() {
    const result = await this.taskManagementService.findAll();
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: 'Task Management Found Successfully',
      data: result
    });
  }

 @Get(':id')
 async findOne(@Param('id') id: string) {
    const result = await this.taskManagementService.findOne(id);
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: 'Task Management Found Successfully',
      data: result
    });
  }

 @Patch(':id')
 async update(@Param('id') id: string, @Body() updateTaskManagementDto: UpdateTaskManagementDto) {
    const result = await this.taskManagementService.update(id, updateTaskManagementDto);
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: 'Task Management Updated Successfully',
      data: result
    });
  }

  @Delete(':id')
 async remove(@Param('id') id: string) {
    const result = await this.taskManagementService.remove(id);
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: 'Task Management Deleted Successfully',
      data: result
    });
  }

}

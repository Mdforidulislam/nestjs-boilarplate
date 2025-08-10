import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpStatus, Req } from '@nestjs/common';
import { TaskApplicationService } from './task_application.service';
import { CreateTaskApplicationDto } from './dto/create-task_application.dto';
import { UpdateTaskApplicationDto } from './dto/update-task_application.dto';
import { PrismaService } from '@/helper/prisma.service';
import { PrismaHelperService } from '@/utils/is_existance';
import { ResponseService } from '@/utils/response';
import { Roles } from '../auth/roles.decorator';
import { Role } from '@prisma/client';

@Controller('task-application')
export class TaskApplicationController {
  constructor(
    private readonly taskApplicationService: TaskApplicationService,
    private readonly prismaService: PrismaService,
    private readonly prismaHelper: PrismaHelperService
  ) {}

  @Post()
  @Roles(Role.ADMIN, Role.TRADER)
  async create(@Body() createTaskApplicationDto: CreateTaskApplicationDto) {
    const reponse = await  this.taskApplicationService.create(createTaskApplicationDto);
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: 'Task Application Created Successfully',
      data: reponse
    })
  }

  @Get()
  @Roles(Role.TRADER, Role.ADMIN)
 async  OfferTaskFindAll(
    @Query() query: Record<string, any>,
    @Req() req: any,
  ) {
  const user = req?.user;
  const result = await this.taskApplicationService.OfferAll(query, user);
  return ResponseService.formatResponse({
    statusCode: HttpStatus.OK,
    message: 'Task Application Found Successfully',
    data: result
  })


}

 @Get()
 @Roles(Role.TRADER, Role.ADMIN)
 async  ReestTaskFindAll(
    @Query() query: Record<string, any>,
    @Req() req: any,
  ) {
  const user = req?.user;
  const result = await this.taskApplicationService.RequestAll(query, user);
  return ResponseService.formatResponse({
    statusCode: HttpStatus.OK,
    message: 'Task Application Found Successfully',
    data: result
  })
}


  @Get(':id')
  @Roles(Role.TRADER, Role.ADMIN)
 async findOneOffer(@Param('id') id: string) {
    const result = await this.taskApplicationService.findOneOffer(id);
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: 'Task Application Found Successfully',
      data: result
    })
  }


  @Get(':id')
  @Roles(Role.TRADER, Role.ADMIN)
 async findOneRequest(@Param('id') id: string) {
    const result = await this.taskApplicationService.findOneRequest(id);
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: 'Task Application Found Successfully',
      data: result
    })
  }


  @Patch(':id')
  @Roles(Role.TRADER, Role.ADMIN)
  async  updateOneOffer(@Param('id') id: string, @Body() updateTaskApplicationDto: UpdateTaskApplicationDto) {
    const result = await  this.taskApplicationService.updateOffer(id, updateTaskApplicationDto);
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: 'Task Application Updated Successfully',
      data: result
    })
  }



  @Patch(':id')
  @Roles(Role.TRADER, Role.ADMIN)
  async  updateOneRequest(@Param('id') id: string, @Body() updateTaskApplicationDto: UpdateTaskApplicationDto) {
    const result = await  this.taskApplicationService.updateRequest(id, updateTaskApplicationDto);
    return ResponseService.formatResponse({
      statusCode: HttpStatus.OK,
      message: 'Task Application Updated Successfully',
      data: result
    })
  }


  @Delete(':id')
  @Roles(Role.TRADER, Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.taskApplicationService.remove(id);
  }
}

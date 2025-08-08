import { Injectable } from '@nestjs/common';
import { createCategoryDto, CreateTaskManagementDto } from './dto/create-task_management.dto';
import { UpdateTaskManagementDto } from './dto/update-task_management.dto';
import { PrismaService } from '@/helper/prisma.service';
import { PrismaHelperService } from '@/utils/is_existance';
import QueryBuilderIsrafil from '@/utils/queryBuilder';

@Injectable()
export class TaskManagementService {

constructor(
  private readonly prisma: PrismaService,
  private readonly prismaHelper: PrismaHelperService
) {}
async create(createTaskManagementDto: CreateTaskManagementDto) {
  try{
     return await this.prisma.$transaction(async (tx) => {

    const trader = await tx.trader.findFirst({
      where: { id: createTaskManagementDto.traderId },
    });

    if (!trader) {
      throw new Error("Trader not found");
    }

    if (!trader.isVerified) {
      throw new Error("Trader is not verified");
    }

    const duplicateTask = await tx.task.findFirst({
      where: {
        title: createTaskManagementDto.title,
        traderId: createTaskManagementDto.traderId,
      },
    });

    if (duplicateTask) {
      throw new Error("Task with this title already exists for this trader");
    }

    const createdTask = await tx.task.create({
      data: {
        ...createTaskManagementDto,
        taskType: createTaskManagementDto.taskType ?? 'PAYMENT',
        status: createTaskManagementDto.status ?? 'PENDING',
        isActive: createTaskManagementDto.isActive ?? true,
      },
    });

    return createdTask;
  });
  }catch(e){
    console.log(e);
  }
}


 async findAll() {
    return `This action returns all taskManagement`;
  }

  findOne(id: string) {
    return `This action returns a #${id} taskManagement`;
  }

  update(id: string, updateTaskManagementDto: UpdateTaskManagementDto) {
    return `This action updates a #${id} taskManagement`;
  }

  remove(id: string) {
    return `This action removes a #${id} taskManagement`;
  }
}

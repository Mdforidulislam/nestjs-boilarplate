import { Injectable } from '@nestjs/common';
import { CreateTaskManagementDto } from './dto/create-task_management.dto';
import { UpdateTaskManagementDto } from './dto/update-task_management.dto';
import { PrismaService } from '@/helper/prisma.service';
import { PrismaHelperService } from '@/utils/is_existance';
import QueryBuilder from '@/utils/queryBuilder';
import { AplicationStatus } from '@prisma/client';

@Injectable()
export class TaskManagementService {

constructor(
  private readonly prisma: PrismaService,
  private readonly prismaHelper: PrismaHelperService
) {}
async create(createTaskManagementDto: CreateTaskManagementDto) {
  try{
     console.log(createTaskManagementDto,'createTaskManagementDto');
   


     return await this.prisma.$transaction(async (tx) => {

    const trader = await tx.trader.findFirst({
      where: { id: createTaskManagementDto.traderId },
      include:{
        subscription: true
      }    
    });


    if (!trader) {

      return "Trader not found";
    }

    if (!trader.isVerified) {
      return "Trader is not verified";
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
        status: createTaskManagementDto.status ?? 'IN_PROGRESS',
        isActive: createTaskManagementDto.isActive ?? true,
      },
    });

    return createdTask;
  });
  }catch(e){
    console.log(e);
  }
}


 async findAll(
    query: Record<string, any>,
 ) {
  
    const queryBuilder = new QueryBuilder(query, this.prisma.task);
    const result = await queryBuilder
      .filter()
      .search([])
      .nestedFilter([])
      .sort()
      .paginate()
      .include({
        trader: true,
      })
      .fields()
      .filterByRange([])
      .execute();
    const meta = await queryBuilder.countTotal();
    return { meta, data: result };
  }

async findOne(id: string) {
  const task = await this.prisma.task.findUnique({ where: { id } });
  if (!task) {
      return "Task not found";
  }
  return task;
}

 async update(id: string, updateTaskManagementDto: UpdateTaskManagementDto) {
  this.prismaHelper.validateEntityExistence("task",id,"Task not found")
  
  
  return await this.prisma.task.update({where: {id}, data: updateTaskManagementDto});
}

 async remove(id: string) {

  this.prismaHelper.validateEntityExistence("task",id,"Task not found")

  const application = await this.prisma.task_Application.findFirst({
    where: {
      taskId: id,
      status: AplicationStatus.APPROVED
    },
  });

  if (application) {
    return "Cannot delete task with approved applications";
  }


  return await this.prisma.task.delete({where: {id}});

}
}

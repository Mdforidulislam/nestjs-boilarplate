import { Injectable, Query } from '@nestjs/common';
import { CreateTaskApplicationDto } from './dto/create-task_application.dto';
import { UpdateTaskApplicationDto } from './dto/update-task_application.dto';
import { PrismaService } from '@/helper/prisma.service';
import { PrismaHelperService } from '@/utils/is_existance';
import QueryBuilder from '@/utils/queryBuilder';
import { Role, TaskStatus } from '@prisma/client';

@Injectable()
export class TaskApplicationService {

  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaHelper: PrismaHelperService
    ) {}
  async create(createTaskApplicationDto: CreateTaskApplicationDto) {

    console.log(createTaskApplicationDto,'createTaskApplicationDto');

  if(!createTaskApplicationDto.taskId || !createTaskApplicationDto.offerId) return "Task or User not found";
  const findingTask = await this.prismaHelper.validateEntityExistence('task', createTaskApplicationDto.taskId,"Task not found");
  const findingUser = await this.prismaHelper.validateEntityExistence('trader', createTaskApplicationDto.offerId,"User not found");

  if(!findingTask) return "Task not found";
  if(!findingUser) return "User not found";

  const isAlreadyApplied = await this.prisma.task_Application.findFirst({
    where: {
      taskId: createTaskApplicationDto.taskId,
      offerId: createTaskApplicationDto.offerId
    }
  });

  if(isAlreadyApplied) return "You have already applied for this task";
  
    const reponse = await  this.prisma.task_Application.create({
      data:{
        ...createTaskApplicationDto
      } as  any
    });
    return reponse
  }

 async OfferAll(
  query: Record<string, any>,
  user: any
 ) {

  console.log(user,'user');


  const queryBuilder = new QueryBuilder(query, this.prisma.task);

  const result = await queryBuilder
    .filter(["status"])
    .search([])
    .nestedFilter([])
    .sort()
    .paginate()
    .rawFilter({ 
      traderId: user.id,
      status: TaskStatus.PENDING
     })
    .include({
        task_Application: true
    })
    .fields()
    .filterByRange([])
    .execute();

  const meta = await queryBuilder.countTotal();

  return { meta, data: result };

}

async RequestAll (
  query: Record<string, any>,
  user: any
){


  const queryBuilder = new QueryBuilder(query, this.prisma.task_Application);
  const result = await queryBuilder
    .filter()
    .search([])
    .nestedFilter([])
    .sort()
    .rawFilter({
      role: Role.TRADER,
      offerId: user.id
    })
    .paginate()
    .include({})
    .fields()
    .filterByRange([])
    .execute();

  const meta = await queryBuilder.countTotal();

  return { meta, data: result };
}

 async findOneOffer(id: string) {

  

}

  findOneRequest(id: string) {
    return `This action returns a #${id} taskApplication`;
  }

  updateOffer(id: string, updateTaskApplicationDto: UpdateTaskApplicationDto) {
    return `This action updates a #${id} taskApplication`;
  }

  updateRequest(id: string, updateTaskApplicationDto: UpdateTaskApplicationDto) {
    return `This action updates a #${id} taskApplication`;
  }

  remove(id: string) {
    return `This action removes a #${id} taskApplication`;
  }
}

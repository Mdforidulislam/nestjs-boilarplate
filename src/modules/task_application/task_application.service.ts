import { Injectable, Query } from '@nestjs/common';
import { CreateTaskApplicationDto } from './dto/create-task_application.dto';
import { UpdateTaskApplicationDto } from './dto/update-task_application.dto';
import { PrismaService } from '@/helper/prisma.service';
import { PrismaHelperService } from '@/utils/is_existance';
import QueryBuilder from '@/utils/queryBuilder';
import { Role, TaskStatus } from '@prisma/client';
import { MarketplacePaymentService } from '@/payment/Stripe/marketplace.payment';

@Injectable()
export class TaskApplicationService {

  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaHelper: PrismaHelperService,
    private readonly marketplaceService: MarketplacePaymentService
    ) {}
  async create(createTaskApplicationDto: CreateTaskApplicationDto) {

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

  const isFinginTrader = await this.prisma.trader.findFirst({
    where: {
      userId: user.id
    }
  });


  if(!isFinginTrader) return "User not found";

  const queryBuilder = new QueryBuilder(query, this.prisma.task);

  const result = await queryBuilder
    .filter(["status"])
    .search([])
    .nestedFilter([])
    .sort()
    .paginate()
    .rawFilter({ 
      traderId: isFinginTrader.id,
      status: TaskStatus.IN_PROGRESS
     })
    .include({
        task_Application: {
      include: {
        offerByTrader: true  
      }
    }
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

  const isFinginTrader = await this.prisma.trader.findFirst({
    where: {
      userId: user.id
    }
  });

  if(!isFinginTrader) return "User not found";

  const queryBuilder = new QueryBuilder(query, this.prisma.task_Application);
  const result = await queryBuilder
    .filter()
    .search([])
    .nestedFilter([])
    .sort()
    .rawFilter({
      offerId: isFinginTrader.id,
      status: TaskStatus.IN_PROGRESS
    })
    .paginate()
    .include({
      offerByTrader: true,
      task: true
    })
    .fields()
    .filterByRange([])
    .execute();

  const meta = await queryBuilder.countTotal();

  return { meta, data: result };
}

 async findOneOffer(id: string) {

  if(!id) return "Task Application not found";

  const result = await this.prisma.task.findFirst({
    where: {
      id
    },
    include: {
      task_Application: {
        include: {
         task:{
           include: {
             review: true
              }
           }
        }
      }
    }
  });
  return result
  
}

 async findOneRequest(id: string) {
    return await this.prisma.task_Application.findFirst({
      where: {
        id
      },
      include: {
        task: {
          include:{
            review: true
          }
        }
      }
    })

}


async updateOffer(id: string, updateTaskApplicationDto: UpdateTaskApplicationDto) {

  if(!id) return "Task Application not found";

  const finding = await this.prisma.task.findFirst({
    where: {
      id
    },
  });

  if(!finding) return "Task Application not found";

  const reponse = await this.marketplaceService.createPaymentWithSession(
     finding.id,
     updateTaskApplicationDto.offerId, 
     updateTaskApplicationDto.amount
  );
  return reponse
}

async  updateRequest(id: string, updateTaskApplicationDto: UpdateTaskApplicationDto) {

  if(!id) return "Task Application not found";

  const finding = await this.prisma.task_Application.findFirst({
    where: {
      id
    },
  });

  if(!finding) return "Task Application not found";

return await this.prisma.task.update({
    where:{
      id: finding.taskId
    },
    data:{
      status: TaskStatus.DELIVERED,
      ...updateTaskApplicationDto

    }
  })
}

  remove(id: string) {
    return `This action removes a #${id} taskApplication`;
  }
}

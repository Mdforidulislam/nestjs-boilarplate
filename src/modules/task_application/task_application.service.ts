import { Injectable, Query } from '@nestjs/common';
import { CreateTaskApplicationDto } from './dto/create-task_application.dto';
import { UpdateTaskApplicationDto } from './dto/update-task_application.dto';
import { PrismaService } from '@/helper/prisma.service';
import { PrismaHelperService } from '@/utils/is_existance';
import QueryBuilder from '@/utils/queryBuilder';
import { AplicationStatus, Role, TaskStatus } from '@prisma/client';
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

  const findingTaskApplication = await this.prisma.task_Application.findFirst({
    where: {
      id
    },
    include: {
      task: true
    }
  });
  
  if(!findingTaskApplication) return "Task Application not found";

  const result = await this.prisma.task.findFirst({
    where: {
      id: findingTaskApplication?.taskId
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
  
  const findingTaskApplication = await this.prisma.task_Application.findFirst({
    where: {
      id
    },
    include: {
      task: true
    }
  });

  const isExtingTrader = await this.prisma.trader.findFirst({
    where: {
      id: updateTaskApplicationDto.offerId
    }
  });

  if(!isExtingTrader) return "Trader not found";

  if(findingTaskApplication.status === AplicationStatus.IN_PROGRESS){
        if(!findingTaskApplication) return "Task Application not found";
        if(findingTaskApplication.task.status !== TaskStatus.IN_PROGRESS) return "Task is status not in progress";
        const reponse = await this.marketplaceService.createPaymentWithSession({
          taskId: findingTaskApplication.taskId,
          buyerId: findingTaskApplication.offerId, 
          task_applicationId: findingTaskApplication.id,
          amount: findingTaskApplication.task.max_salary ?? findingTaskApplication.task.min_salary,
          paymentType: "OnTimePayment_TaskApplication_Offer"
        });

      return reponse
  }else {

    if(!findingTaskApplication) return "Task Application not found";
    if(findingTaskApplication.status !== AplicationStatus.APPROVED) return "Application Status is not Approved";
    if(findingTaskApplication.task.status !== TaskStatus.ORDER_ACTIVE) return "Task is not order active";

    const response = await this.marketplaceService.transferMoney({
     traderAccountId:  isExtingTrader.stripeAccountId,
     taskId: findingTaskApplication.task.id,
     amount: findingTaskApplication.task.max_salary || 100 ,
     paymentType: "OnTimePayment_TaskApplication_Offer_paymentTransfer"
    })
    //  return response

    return response
  }

}

async  updateRequest(id: string, updateTaskApplicationDto: UpdateTaskApplicationDto) {

if(!id) return "Task Application not found";

const finding = await this.prisma.task_Application.findFirst({
    where: {
      id
    },
    include:{
      task: true
    }
});

if(!finding) return "Task Application not found";
if(finding.status !== AplicationStatus.APPROVED) return "Application Status is not Approved";
if(finding.task.status !== TaskStatus.ORDER_ACTIVE) return "Task is not order active";

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

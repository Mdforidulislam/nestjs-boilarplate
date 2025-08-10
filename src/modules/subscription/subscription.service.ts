import { Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { SuscriptionStripe } from '@/payment/Stripe/subcription.stripe';
import { PrismaService } from '@/helper/prisma.service';
import { PrismaHelperService } from '@/utils/is_existance';
import QueryBuilderIsrafil from '@/utils/queryBuilder';
import { SubscriptionFilterFields, SubscriptionInclude, SubscriptionRangeFilter } from './subscription.constant';
import { sub } from 'date-fns';
import e from 'express';
import { Subscription } from '@prisma/client';
import QueryBuilder from '@/utils/queryBuilder';

@Injectable()


export class SubscriptionService {

  constructor (
    private readonly suscriptionStripe: SuscriptionStripe,
    private readonly prisma: PrismaService,
    private readonly prismaHelper: PrismaHelperService
  ) {}

  async  create(createSubscriptionDto: CreateSubscriptionDto) {

    return await this.prisma.$transaction(async (tx) => {
      try{
        const  findUser = await tx.user.findFirst({
          where: {id: createSubscriptionDto.userId}
        });
        console.log(findUser,'checking user');


      if(!findUser) {
        throw new Error("user not found")
      }

      if(!findUser?.isVerified){
        throw new Error("user is not verified")
      }

      const findingSubscripitonPlan = await tx.subscriptionPlan.findFirst({
        where: {
          stripePriceId: createSubscriptionDto?.subscriptionPlanId
        } as any
      });

      if(!findingSubscripitonPlan) {
        throw new Error("subscription plan not found")
      }

      const subscriptionSesstion = await this.suscriptionStripe.createSubscription({
        subscriptionType: "sesstion",
        email: findUser.email,
        priceId: findingSubscripitonPlan.stripePriceId,
        description: findingSubscripitonPlan.description ?? "This is Subscription Plan",
        metadata: {
          subscriptionPlanId: findingSubscripitonPlan.id,
          ownerId: findUser.id,
          paymentType : "SUBSCRIPTION"

        }
      });

      return subscriptionSesstion

      }catch (error: unknown) {
        console.log(error);
      }
    });
}

 async findAll(query: Record<string, any>) {
    const queryBuilder = new QueryBuilder(query, this.prisma.subscription);
    const result = await queryBuilder

      .filter()
      .search([])
      .nestedFilter([])
      .sort()
      .paginate()
      .include({})
      .fields()
      .filterByRange([])
      .execute();

    const meta = await queryBuilder.countTotal();

    return { meta, data: result };

  }

async  findOne(id: string) {
    this.prismaHelper.validateEntityExistence("subscription",id,
      "Subscription not found"
    )

    const response = await this.prisma.subscription.findUnique({where: {id}});
    return response
}

 async update(id: string, updateSubscriptionDto: any) {

   try{
        const subscription : Subscription | null = await this.prismaHelper.validateEntityExistence("subscription",id,
          "Subscription not found"
        )

      if(!subscription) {
        throw new Error("Subscription not found")
      }

    const updateSubscription = await this.suscriptionStripe.updateSubscription({
      subscriptionId: subscription?.stripeSubscriptionId
    });

    return updateSubscription

   }catch (error: unknown) {
     console.log(error);
   }
}

 async remove(id: string) {

    this.prismaHelper.validateEntityExistence("subscription",id,
      "Subscription not found"
    )

    const repsonse = await this.suscriptionStripe.cancelSubscription({subscriptionId: id});
    return repsonse
}
}

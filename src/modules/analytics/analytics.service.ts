import { Injectable } from '@nestjs/common';
import { FileService } from '@/helper/file.service';
import { startOfDay, subDays } from 'date-fns';
import { PrismaService } from '@/helper/prisma.service';
import { AdvertiseStatus, Role } from '@prisma/client';
import { PrismaHelperService } from '@/utils/is_existance';
import { startOfMonth, subMonths, endOfMonth, eachDayOfInterval, format } from 'date-fns';

@Injectable()
export class AnalyticsService {
  constructor(
    private prisma: PrismaService,
    private prismaHelper: PrismaHelperService,
    private fileService: FileService,
  ) {}

  async adminOverview() {
    const sevenDaysAgo = startOfDay(subDays(new Date(), 7));

    const [
      advertisementsCount,
      brokersCount,
      brokerFirmsCount,
      subscribersCount,
      propertyAnalyticsCount,
      newUsersCount,
      adsCount,
      newBrokerUsersCount,
    ] = await Promise.all([
      this.prisma.advertise.count(),
      this.prisma.broker.count(),
      this.prisma.brokerFirm.count(),
      this.prisma.subscription.count(),
      this.prisma.propertyAnalytics.count(),
      this.prisma.user.count({
        where: {
          createdAt: {
            gte: sevenDaysAgo,
          },
        },
      }),

      this.prisma.advertise.count({
        where: {
          status: AdvertiseStatus.WAITING,
        },
      }),

      this.prisma.user.count({
        where: {
          role: Role.BROKER,
          createdAt: {
            gte: sevenDaysAgo,
          },
        },
      }),
    ]);

    return {
      advertisementsCount,
      brokersCount,
      brokerFirmsCount,
      subscribersCount,
      propertyAnalyticsCount,
      newUsersCount,
      adsCount,
      newBrokerUsersCount,
    };
  }



  async adminEconomic(query: Record<string, any>) {

    // geting DateTimehere
    function DateGenerate(TakingTime: string){
      let date : Date = new Date();
      switch(TakingTime){
            case "yearly":
              date.setFullYear(date.getFullYear() - 1);
              break;
            case "monthly":
              date.setMonth(date.getMonth() - 1);
              break;
            case "week":
              date.setDate(date.getDate() - 7);
              break;
            case "day":
              date.setDate(date.getDate() - 1);
              break;
      }
      
    }


       const now = new Date();
    const thisMonthStart = startOfMonth(now);
    const thisMonthEnd = endOfMonth(now);
    const lastMonthStart = startOfMonth(subMonths(now, 1));
    const lastMonthEnd = endOfMonth(subMonths(now, 1));


        // Total revenue (this month)
        const currentMonthRevenue = await this.prisma.payment.aggregate({
          where: {
            paymentDate: { gte: thisMonthStart, lte: thisMonthEnd },
            paymentStatus: 'SUCCEEDED',
          },
          _sum: { amount: true }
        });

        // Last month revenue
        const lastMonthRevenue = await this.prisma.payment.aggregate({
          where: {
            paymentDate: { gte: lastMonthStart, lte: lastMonthEnd },
            paymentStatus: 'SUCCEEDED',
            
          },
          _sum: { amount: true }
        });

        // Average profit (monthly)
        const allRevenue = await this.prisma.payment.aggregate({
          where: { paymentStatus: 'SUCCEEDED',  },
          _avg: { amount: true }
        });

        // Pending payment
        const pending = await this.prisma.payment.aggregate({
          where: { paymentStatus: 'PROCESSING',  },
          _sum: { amount: true },
          _count: { _all: true }
        });

        // Active Subscriptions
        const activeSubs = await this.prisma.subscription.findMany({
          where: {
            subscriptionStatus: 'ACTIVE',
          },
          include: { payments: true }
        });

        const monthlyIncome = activeSubs.reduce((acc, sub) => {
          const total = sub.payments.reduce((sum, p) => sum + p.amount, 0);
          return acc + total;
        }, 0);

        // Daily revenue (current month)
        const dayList = eachDayOfInterval({ start: thisMonthStart, end: thisMonthEnd });
        const paymentsThisMonth = await this.prisma.payment.findMany({
          where: {
            paymentDate: { gte: thisMonthStart, lte: thisMonthEnd },
            paymentStatus: 'SUCCEEDED',
            
          },
        });

        const dailyMap = new Map<string, number>();
        for (const p of paymentsThisMonth) {
          const day = format(new Date(p.paymentDate), 'yyyy-MM-dd');
          dailyMap.set(day, (dailyMap.get(day) || 0) + p.amount);
        }

        const revenueAndProfit = dayList.map((d) => {
          const key = format(d, 'yyyy-MM-dd');
          return {
            dayName: format(d, 'EEE dd'),
            everyDayIncome: dailyMap.get(key) || 0
          };
        });

        // Revenue sources breakdown
        const [subRevenue, adRevenue, premiumRevenue] = await Promise.all([
          this.prisma.payment.aggregate({
            where: { subscriptionId: { not: null }, paymentStatus: 'SUCCEEDED',  },
            _sum: { amount: true }
          }),
          this.prisma.payment.aggregate({
            where: { subscriptionPlanId: null, paymentStatus: 'SUCCEEDED',  },
            _sum: { amount: true }
          }),
          this.prisma.payment.aggregate({
            where: { subscriptionPlanId: null, subscriptionId: null, paymentStatus: 'SUCCEEDED',  },
            _sum: { amount: true }
          })
        ]);



        return {
          totalRevenue: {
            monthRevenue: currentMonthRevenue._sum.amount || 0,
            fromLastMonth: ((currentMonthRevenue._sum.amount || 0) - (lastMonthRevenue._sum.amount || 0))
          },
          averageProfit: allRevenue._avg.amount || 0,
          pendingPayment: {
            totalPayment: pending._sum.amount || 0,
            totalInvoice: pending._count._all || 0
          },
          activeSubscription: {
            totalSubscription: activeSubs.length,
            monthlyIncome
          },
          revenueAndProfit,
          revenueSources: {
            subscriptions: subRevenue._sum.amount || 0,
            advertisingFee: adRevenue._sum.amount || 0,
            premiumFeatures: premiumRevenue._sum.amount || 0
          }
        };

  }

  async findinBrokerAndBrokerFirm(user: any) {
    console.log(user,'user user');
  if (user.role === 'broker') {
    const broker = await this.prisma.broker.findUnique({
      where: { userId: user.id },
      select: { id: true },
    });
    return { brokerId: broker?.id };
  }

  if (user.role === 'brokerFirm') {
    const firm = await this.prisma.brokerFirm.findUnique({
      where: { userId: user.id },
      select: { id: true },
    });
    return { brokerFirmId: firm?.id };
  }

  return {};
}

async commonOverview(query: Record<string, any>, req: any) {
  const user = req?.user;
  const { brokerName, customerName } = query;

  const { brokerId, brokerFirmId } = await this.findinBrokerAndBrokerFirm(user);

  const now = new Date();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  // ---------- Step 1: Search Filters ----------
  const searchFilters: { brokerId?: string; customerId?: string } = {};

  if (brokerName) {
    const broker = await this.prisma.broker.findFirst({
      where: {
        fullName: { contains: brokerName, mode: 'insensitive' },
        ...(brokerFirmId ? { brokerFirmId } : {}),
      },
      select: { id: true },
    });
    if (broker) searchFilters.brokerId = broker.id;
  }

  if (customerName) {
    const customer = await this.prisma.customer.findFirst({
      where: {
        fullName: { contains: customerName, mode: 'insensitive' },
      },
      select: { id: true },
    });
    if (customer) searchFilters.customerId = customer.id;
  }

  // ---------- Step 2: Dynamic Filters ----------
  const propertyWhere: any = {};
  const incomeWhere: any = {};
  
  // Base filters from role
  if (user.role === 'brokerFirm' && brokerFirmId) {
    propertyWhere.brokerFirmId = brokerFirmId;
    incomeWhere.brokerFirmId = brokerFirmId;
  }

  if (user.role === 'broker' && brokerId) {
    propertyWhere.brokerId = brokerId;
    incomeWhere.brokerId = brokerId;
  }

  if (user.role === 'customer') {
    propertyWhere.customerId = user.id;
    incomeWhere.customerId = user.id;
  }

  // Append optional search filters
  if (searchFilters.brokerId) propertyWhere.brokerId = searchFilters.brokerId;
  if (searchFilters.customerId) propertyWhere.customerId = searchFilters.customerId;

  // ---------- Step 3: Query Transaction ----------
  const [
    totalLeads,
    activeBusiness,
    monthlyIncome,
  ] = await this.prisma.$transaction([
    // Count all matched properties
    this.prisma.property.count({ where: propertyWhere }),

    // Count ACTIVE ones
    this.prisma.property.count({
      where: {
        ...propertyWhere,
        status: 'FOR_SALE',
      },
    }),

    // Monthly income = sum of price from createdAt this month
    this.prisma.property.aggregate({
      where: {
        ...incomeWhere,
        createdAt: { gte: firstDayOfMonth },
      },
      _sum: {
        price: true,
      },
    })
  ]);

  // ---------- Step 4: Return Final Overview ----------
  return {
    brokerFirmAndBrokerOverView: {
      totalLeads,
      activeBusiness,
      monthlyIncome: monthlyIncome._sum.price ?? 0,
      unReadmessage: 0,
    },
  };
}
  

async brokerFirmOverview(query: Record<string, any>, req: any) {
  const user = req?.user;
  const { brokerName, customerName } = query;

  // Step 0: find brokerFirmId and brokerId for current user
  const { brokerFirmId } = await this.findinBrokerAndBrokerFirm(user);

  // if (!brokerFirmId ) {
  //   throw new Error('User is not linked to any broker or brokerFirm');
  // }

  const now = new Date();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  let filteredBrokerIds: string[] | null = null;
  if (brokerName) {
    filteredBrokerIds = (
      await this.prisma.broker.findMany({
        where: {
          fullName: { contains: brokerName, mode: 'insensitive' },
          brokerFirmId: brokerFirmId, 
        },
        select: { id: true },
      })
    ).map((b) => b.id);
  }

  let filteredCustomerIds: string[] | null = null;
  if (customerName) {
    const brokersInFirm = filteredBrokerIds ?? (
      await this.prisma.broker.findMany({
        where: { brokerFirmId },
        select: { id: true },
      })
    ).map((b) => b.id);

    filteredCustomerIds = (
      await this.prisma.customer.findMany({
        where: {
          fullName: { contains: customerName, mode: 'insensitive' },
          properties: {
            some: {
              brokerId: { in: brokersInFirm },
            },
          },
        },
        select: { id: true },
      })
    ).map((c) => c.id);
  }

  //  total brokers
  const totalBrokers = await this.prisma.broker.count({
    where: {
     brokerFirmId,
      ...(filteredBrokerIds ? { id: { in: filteredBrokerIds } } : {}),
    },
  });

  // total active brokers
  const activeBrokersCount = await this.prisma.broker.count({
    where: {
      brokerFirmId,
      ...(filteredBrokerIds ? { id: { in: filteredBrokerIds } } : {}),
      user:{
        status:"ACTIVE",
      }
    },
  });

  // Get brokers to include in turnover calc
  const brokersForTurnover = filteredBrokerIds ?? (
    await this.prisma.broker.findMany({
      where: { brokerFirmId },
      select: { id: true },
    })
  ).map((b) => b.id);

  // Get customers to include in turnover calc
  const customersForTurnover = filteredCustomerIds ?? undefined;

  // total turnover
  const totalTurnoverAgg = await this.prisma.property.aggregate({
    where: {
      brokerId: { in: brokersForTurnover },
      ...(customersForTurnover ? { customerId: { in: customersForTurnover } } : {}),
      status: {
        in: ['FOR_SALE', 'SOLD'], 
      },
    },
    _sum: {
      price: true,
    },
  });

  const totalTurnover = totalTurnoverAgg._sum.price ?? 0;

  // monthly income
  const monthlyIncomeAgg = await this.prisma.property.aggregate({
    where: {
      brokerId: { in: brokersForTurnover },
      ...(customersForTurnover ? { customerId: { in: customersForTurnover } } : {}),
      createdAt: { gte: firstDayOfMonth },
      status: {
        in: ['SOLD'],
      },
    },
    _sum: {
      price: true,
    },
  });

  
  const monthlyIncome = monthlyIncomeAgg._sum.price ?? 0;

  return {
    brokerAndBrokerFirm_overView: {
      totalBrokers,
      activeBrokers: activeBrokersCount,
      totalTurnover,
      monthlyIncome,
      unreadMessage: 0,
    },
  };
}

}




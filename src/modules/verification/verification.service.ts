import { Injectable } from '@nestjs/common';
import { CreateVerificationDto } from './dto/create-verification.dto';
import { UpdateVerificationDto } from './dto/update-verification.dto';
import { PrismaService } from '@/helper/prisma.service';
import { PrismaHelperService } from '@/utils/is_existance';
import { StripeSingleton } from '@/payment/Stripe/stripe.connection';
import { MarketplacePaymentService } from '@/payment/Stripe/marketplace.payment';

@Injectable()
export class VerificationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaHelper: PrismaHelperService,
    private readonly marketplaceService: MarketplacePaymentService
  ) {}

  async create(createVerificationDto: CreateVerificationDto) {
    const stripe = StripeSingleton.getClient();

    const user = await this.prisma.user.findUnique({
      where: {
        email: createVerificationDto.email,
      },
      include: {
        trader: true,
      },
    });

    if (!user) throw new Error('User not found');

    // If no stripe account, create one
    if (!user.trader.stripeAccountId) {

      const account = await stripe.accounts.create({
        type: 'express',
        email: user.email,
        country: createVerificationDto.country,
        tos_acceptance:{
            service_agreement: ''
        },
        capabilities: {
          transfers: { requested: true },
          card_payments: { requested: true },
        },
        business_type: 'individual',
      });

      await this.prisma.trader.update({
        where: { id: user.id },
        data: { stripeAccountId: account.id },
      });


      const accountLink = await stripe.accountLinks.create({
        account: account.id,
        refresh_url: `${process.env.CLIENT_URL}/stripe/refresh`,
        return_url: `${process.env.CLIENT_URL}/stripe/return`,
        type: 'account_onboarding',
      });

      return { onboardingUrl: accountLink.url , accountLink};
    }

    // If account exists, check status
    const account = await stripe.accounts.retrieve(user.trader.stripeAccountId);

    console.log(account, 'account');

    if (account.details_submitted && account.charges_enabled) {
      return { status: 'verified', canPayout: true };
    } else {
      const account = await stripe.accounts.retrieve("acct_1RtHCvKGhhHMR5Eo");
      console.log(account, 'account');
      const accountLink = await stripe.accountLinks.create({
        account: user.trader.stripeAccountId,
        refresh_url: `${process.env.CLIENT_URL}/stripe/refresh`,
        return_url: `${process.env.CLIENT_URL}/stripe/return`,
        type: 'account_onboarding',
      });

      return { onboardingUrl: accountLink.url , accountLink};
    }
  }

  // Optional CRUDs
  findAll() {
    return `This action returns all verification`;
  }

  findOne(id: number) {
    return `This action returns a #${id} verification`;
  }

  update(id: number, updateVerificationDto: UpdateVerificationDto) {
    return `This action updates a #${id} verification`;
  }

  remove(id: number) {
    return `This action removes a #${id} verification`;
  }
}

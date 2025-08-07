import { Injectable } from '@nestjs/common';
import { CreateVerificationDto } from './dto/create-verification.dto';
import { UpdateVerificationDto } from './dto/update-verification.dto';
import { PrismaService } from '@/helper/prisma.service';
import { PrismaHelperService } from '@/utils/is_existance';
import { StripeSingleton } from '@/payment/Stripe/stripe.connection';

@Injectable()
export class VerificationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaHelper: PrismaHelperService
  ) {}

  async create(createVerificationDto: CreateVerificationDto) {
    const stripe = StripeSingleton.getClient();

    const user = await this.prisma.user.findUnique({
      where: {
        email: createVerificationDto.email,
      },
    });

    if (!user) throw new Error('User not found');

    // If no stripe account, create one
    if (!user.stripeAccountId) {
      const account = await stripe.accounts.create({
        type: 'express',
        email: user.email,
        country: createVerificationDto.country || "BD",
        tos_acceptance:{
            service_agreement: 'recipient'
        },
        capabilities: {
          transfers: { requested: true },
        },
      });

      await this.prisma.user.update({
        where: { id: user.id },
        data: { stripeAccountId: account.id },
      });

      const accountLink = await stripe.accountLinks.create({
        account: account.id,
        refresh_url: `${process.env.CLIENT_URL}/stripe/refresh`,
        return_url: `${process.env.CLIENT_URL}/stripe/return`,
        type: 'account_onboarding',
      });

      return { onboardingUrl: accountLink.url };
    }

    // If account exists, check status
    const account = await stripe.accounts.retrieve(user.stripeAccountId);

    if (account.details_submitted && account.charges_enabled) {
      return { status: 'verified', canPayout: true };
    } else {
      const accountLink = await stripe.accountLinks.create({
        account: user.stripeAccountId,
        refresh_url: `${process.env.CLIENT_URL}/stripe/refresh`,
        return_url: `${process.env.CLIENT_URL}/stripe/return`,
        type: 'account_onboarding',
      });

      return { onboardingUrl: accountLink.url };
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

import { Module } from '@nestjs/common';
import { VerificationService } from './verification.service';
import { VerificationController } from './verification.controller';
import { StripeService } from '@/payment/Stripe/intent.payment';
import { PrismaService } from '@/helper/prisma.service';
import { PrismaHelperService } from '@/utils/is_existance';

@Module({
  controllers: [VerificationController],
  providers: [VerificationService, PrismaService, PrismaHelperService]
})
export class VerificationModule {}

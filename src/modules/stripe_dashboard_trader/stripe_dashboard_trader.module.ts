import { Module } from '@nestjs/common';
import { StripeDashboardTraderService } from './stripe_dashboard_trader.service';
import { StripeDashboardTraderController } from './stripe_dashboard_trader.controller';
import { MarketplacePaymentService } from '@/payment/Stripe/marketplace.payment';

@Module({
  controllers: [StripeDashboardTraderController],
  providers: [StripeDashboardTraderService, MarketplacePaymentService],
})
export class StripeDashboardTraderModule {}

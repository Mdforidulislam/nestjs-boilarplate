import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '@/helper/prisma.service';
import { sub } from 'date-fns';

@Injectable()
export class WebhookService {
  private stripe: Stripe;

  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService
  ) {
    this.stripe = new Stripe(configService.get<string>('STRIPE_SECRET_KEY'), {
    //   apiVersion: '2024-04-10',
    });
  }

  async handleEvent(event: Stripe.Event) {
          console.log(event.type,'checking event type');
    switch (event.type) {


      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;

          // You can fetch subscription or customer from here
        const subscriptionId = session?.subscription as string;
        const customerId = session?.customer as string;
        const expiuredAt = session?.expires_at as number;
        const metadata = session?.metadata as any;

        await this.prisma.subscription.create({
                data: {
                  subscriptionPlanId: metadata.subscriptionPlanId,
                  expiresAt: new Date(expiuredAt * 1000),
                  ownerId: metadata?.ownerId,
                  stripeSubscriptionId: subscriptionId ,
                  stripeCustomerId: customerId,
                  subscriptionStatus: 'ACTIVE',
                  cancelRequest: false,
                },
         });

        break;
      }

      case 'invoice.payment_succeeded': {
      const invoice = event.data.object as Stripe.Invoice;
        try {
  
          const metadata = invoice.parent?.subscription_details?.metadata || {};
              // Step 3: Build Payment data
          await this.prisma.payment.create({
                data: {
                  ...(metadata.userType === 'BROKER_FIRM' ? { brokerFirmId: metadata.ownerId } : { customerId: metadata.ownerId }),
                  amount: invoice.amount_paid / 100,
                  currency: invoice.currency,
                  paymentDate: new Date(invoice.created * 1000),
                  paymentStatus: 'SUCCEEDED', 
                  subscriptionPlanId: metadata?.subscriptionPlanId || null,
                },
              });

        } catch (error) {
          console.error('Error fetching subscription:', error);
        }
 


        break;
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;

        const subscriptionId = subscription.id;
        const customerId = subscription.customer as string;
        const expiredAt = subscription.cancel_at_period_end;
        const metadata = subscription.metadata || {};

        console.log('Subscription Updated:', subscription);
        console.log('Metadata:', metadata);
        console.log('Expired At:', expiredAt);
        console.log('Customer ID:', customerId);
        console.log('Subscription ID:', subscriptionId);

        break;
      }

      case 'customer.subscription.deleted': {
        const stripeSubscription = event.data.object as Stripe.Subscription;

        console.log('Subscription Deleted:', stripeSubscription);

        const subscriptionId = stripeSubscription.id;
        const customerId = stripeSubscription.customer as string;
        const expiredAt = stripeSubscription.cancel_at_period_end;
        const metadata = stripeSubscription.metadata || {};

        console.log('Subscription ID:', subscriptionId);
        console.log('Customer ID:', customerId);
        console.log('Expired At:', expiredAt);
        console.log('Metadata:', metadata);
        

        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        console.log('Payment failed for invoice:', invoice);
        
        break;
      }

      case 'customer.subscription.trial_will_end': {
        const subscription = event.data.object as Stripe.Subscription;
        console.log('⚠️ Trial Will End Soon for:', subscription.trial_end);

        


        break;
      }

      default:
        console.log(`ℹ️ Unhandled event type: ${event.type}`);
    }
  }
}

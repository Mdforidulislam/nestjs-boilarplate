import Stripe from "stripe";

export class MarketplacePaymentService {
    private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe('STRIPE_SECRET_KEY');
  }
  
async createPaymentWithSession(taskId: string, buyerId: string, amount: number) {
    try {
 const session = await this.stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
            price_data: {
                currency: 'usd',
                product_data: {
                name: 'Task Payment',
                },
                unit_amount: amount * 100,
            },
            quantity: 1,
            },
        ],
  metadata: {
    taskId: taskId,
    buyerId: buyerId
  },
  mode: 'payment', 
  success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
  cancel_url: `${process.env.CLIENT_URL}/cancel`,
});

return { sessionId: session.id };
    } catch (error) {
      throw new Error(`Failed to create payment intent: ${error.message}`);
    }
  }

  async transferMoney(taskId: string, traderAccountId: string, amount: number) {
    try {
      const transfer = await this.stripe.transfers.create({
        amount: amount * 100,
        currency: 'usd',
        destination: traderAccountId, 
        transfer_group: `group_${taskId}`,
      });

      return transfer;
    } catch (error) {
      throw new Error(`Failed to transfer money: ${error.message}`);
    }
  }


  async createAccountLink(traderAccountId: string) {
    try {
      const accountLink = await this.stripe.accountLinks.create({
        account: traderAccountId,
        refresh_url: `${process.env.CLIENT_URL}/retry`,
        return_url: `${process.env.CLIENT_URL}/done`, 
        type: 'account_onboarding',
      });

      return accountLink;
    } catch (error) {
      throw new Error(`Failed to create account link: ${error.message}`);
    }
  }

}
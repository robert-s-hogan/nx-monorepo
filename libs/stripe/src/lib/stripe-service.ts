import Stripe from 'stripe';

const stripeSecretKey = process.env['STRIPE_SECRET_KEY']!;

if (!stripeSecretKey) {
  throw new Error(
    'STRIPE_SECRET_KEY is not defined in the environment variables'
  );
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2022-11-15',
});

export class StripeService {
  async processPayment(
    amount: number,
    source: string,
    currency: string = 'usd'
  ): Promise<Stripe.Charge> {
    return stripe.charges.create({
      amount,
      currency,
      source,
    });
  }
}

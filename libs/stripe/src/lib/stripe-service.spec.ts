import { StripeService } from './stripe-service';

describe('StripeService', () => {
  let service: StripeService;

  beforeEach(() => {
    service = new StripeService();
  });

  it('should process payment successfully', async () => {
    const charge = await service.processPayment(1000, 'tok_visa'); // Assuming 'tok_visa' is a valid token for testing
    expect(charge).toBeDefined();
    expect(charge.amount).toEqual(1000);
  });
});

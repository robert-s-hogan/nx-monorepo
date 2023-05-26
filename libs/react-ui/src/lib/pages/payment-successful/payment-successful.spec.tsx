import { render } from '@testing-library/react';

import PaymentSuccessful from './payment-successful';

describe('PaymentSuccessful', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PaymentSuccessful />);
    expect(baseElement).toBeTruthy();
  });
});

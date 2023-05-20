import { render } from '@testing-library/react';

import PaymentFailed from './payment-failed';

describe('PaymentFailed', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PaymentFailed />);
    expect(baseElement).toBeTruthy();
  });
});

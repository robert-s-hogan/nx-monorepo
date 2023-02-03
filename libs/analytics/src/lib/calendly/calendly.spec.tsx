import { render } from '@testing-library/react';

import Calendly from './calendly';

describe('Calendly', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Calendly />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import { FloatingFooter } from './floating-footer';

describe('FloatingFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FloatingFooter currentApp="play2winff" />);
    expect(baseElement).toBeTruthy();
  });
});

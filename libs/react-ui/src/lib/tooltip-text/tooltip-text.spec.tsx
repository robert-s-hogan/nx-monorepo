import { render } from '@testing-library/react';

import TooltipText from './tooltip-text';

describe('TooltipText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TooltipText />);
    expect(baseElement).toBeTruthy();
  });
});

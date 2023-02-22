import { render } from '@testing-library/react';

import TooltipIcon from './tooltip-icon';

describe('TooltipIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TooltipIcon />);
    expect(baseElement).toBeTruthy();
  });
});

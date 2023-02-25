import { render } from '@testing-library/react';

import PageIndicator from './page-indicator';

describe('PageIndicator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageIndicator />);
    expect(baseElement).toBeTruthy();
  });
});

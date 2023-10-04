import { render } from '@testing-library/react';

import WebVitals from './web-vitals';

describe('WebVitals', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebVitals />);
    expect(baseElement).toBeTruthy();
  });
});

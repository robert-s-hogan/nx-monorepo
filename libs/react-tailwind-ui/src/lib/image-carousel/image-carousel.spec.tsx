import { render } from '@testing-library/react';

import ImageCarousel from './image-carousel';

describe('ImageCarousel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageCarousel />);
    expect(baseElement).toBeTruthy();
  });
});

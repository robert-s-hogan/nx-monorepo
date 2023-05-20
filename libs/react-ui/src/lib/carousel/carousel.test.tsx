//libs/react-ui/src/lib/carousel/carousel.test.tsx
// carousel.test.tsx
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Carousel from './carousel';

describe('Carousel', () => {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

  it('renders correctly', () => {
    const { container } = render(<Carousel images={images} />);
    expect(container).toMatchSnapshot();
  });

  it('shows the correct image', () => {
    render(<Carousel images={images} />);

    const img = screen.getByAltText('Carousel Image 0') as HTMLImageElement;
    expect(img.src).toContain('image1.jpg');
  });

  it('changes the image when next button is clicked', () => {
    render(<Carousel images={images} />);

    const nextButton = screen.getByText('→');
    fireEvent.click(nextButton);

    const img = screen.getByAltText('Carousel Image 1') as HTMLImageElement;
    expect(img.src).toContain('image2.jpg');
  });

  it('changes the image when previous button is clicked', () => {
    render(<Carousel images={images} />);

    const previousButton = screen.getByText('←');
    fireEvent.click(previousButton);

    const img = screen.getByAltText('Carousel Image 2') as HTMLImageElement;
    expect(img.src).toContain('image3.jpg');
  });
});

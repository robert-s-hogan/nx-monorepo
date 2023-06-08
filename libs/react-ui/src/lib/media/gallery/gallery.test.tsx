import { render } from '@testing-library/react';
import { Gallery } from './gallery';

describe('Gallery', () => {
  test('renders Gallery component with images', () => {
    const images = ['test1.jpg', 'test2.jpg', 'test3.jpg'];
    const { getAllByAltText } = render(<Gallery images={images} />);

    expect(getAllByAltText(/Gallery Image/i).length).toBe(3);
  });
});

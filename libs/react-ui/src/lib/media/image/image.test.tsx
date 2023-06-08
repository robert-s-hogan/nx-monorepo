import { render } from '@testing-library/react';
import { Image } from './image';

describe('Image', () => {
  test('renders Image component', () => {
    const { getByAltText } = render(
      <Image src="test.jpg" alt="Test Image" size="medium" />
    );

    expect(getByAltText('Test Image')).toBeInTheDocument();
  });
});

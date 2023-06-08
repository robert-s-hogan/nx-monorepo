import { render, fireEvent } from '@testing-library/react';
import { Lightbox } from './lightbox';

describe('Lightbox', () => {
  test('renders Lightbox component', () => {
    const { getByAltText } = render(<Lightbox image="test.jpg" />);
    expect(getByAltText('Lightbox')).toBeInTheDocument();
  });

  test('closes Lightbox on click', () => {
    const { getByAltText, queryByAltText } = render(
      <Lightbox image="test.jpg" />
    );
    fireEvent.click(getByAltText('Lightbox'));
    expect(queryByAltText('Lightbox')).toBeNull();
  });
});

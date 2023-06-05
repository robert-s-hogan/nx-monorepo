import { render, fireEvent } from '@testing-library/react';
import { Rating } from './rating';

describe('Rating', () => {
  const mockRatingChangeHandler = jest.fn();

  test('renders Rating component', () => {
    const { getByText } = render(
      <Rating maxRating={5} onRatingChange={mockRatingChangeHandler} />
    );

    fireEvent.click(getByText('★'));

    expect(mockRatingChangeHandler).toHaveBeenCalledTimes(1);
  });

  test('changes rating when a star is clicked', () => {
    const { getByText } = render(
      <Rating maxRating={5} onRatingChange={mockRatingChangeHandler} />
    );

    fireEvent.click(getByText('★'));

    expect(mockRatingChangeHandler).toHaveBeenCalledWith(1);
  });
});

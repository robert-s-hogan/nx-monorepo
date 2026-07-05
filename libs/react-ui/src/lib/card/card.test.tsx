import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Card } from './card';

describe('Card component', () => {
  // Card's title only renders alongside description (both live inside the
  // same `{description && (...)}` block) and `image` takes a pre-rendered
  // ReactNode rather than a URL/alt pair -- matching the real component API,
  // not the imageUrl/imageAlt/title-only shape this test used to assume.
  const defaultProps = {
    title: 'Example Card',
    description: 'This is an example of a Card component.',
    image: <img src="https://via.placeholder.com/150" alt="Example Image" />,
  };

  test('renders Card with title, description, and image', () => {
    render(<Card {...defaultProps} />);
    const titleElement = screen.getByText(defaultProps.title);
    const descriptionElement = screen.getByText(defaultProps.description);
    const imageElement = screen.getByAltText('Example Image');

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'https://via.placeholder.com/150');
  });

  test('renders Card without description and image when not provided', () => {
    const { description, image, ...restProps } = defaultProps;
    render(<Card {...restProps} />);
    const titleElement = screen.queryByText(restProps.title);
    const descriptionElement = screen.queryByText(defaultProps.description);
    const imageElement = screen.queryByAltText('Example Image');

    // Card only renders its body (including title) when description is set.
    expect(titleElement).not.toBeInTheDocument();
    expect(descriptionElement).not.toBeInTheDocument();
    expect(imageElement).not.toBeInTheDocument();
  });

  test('renders Card with clickable behavior', () => {
    const handleClick = jest.fn();
    render(<Card {...defaultProps} onClick={handleClick} />);
    const cardElement = screen.getByText(defaultProps.title).closest('div');

    if (cardElement) {
      cardElement.click();
    }

    expect(handleClick).toHaveBeenCalled();
  });
});

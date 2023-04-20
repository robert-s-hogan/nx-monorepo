import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Card } from './Card';

describe('Card component', () => {
  const defaultProps = {
    title: 'Example Card',
    description: 'This is an example of a Card component.',
    imageUrl: 'https://via.placeholder.com/150',
    imageAlt: 'Example Image',
  };

  test('renders Card with title, description, and image', () => {
    render(<Card {...defaultProps} />);
    const titleElement = screen.getByText(defaultProps.title);
    const descriptionElement = screen.getByText(defaultProps.description);
    const imageElement = screen.getByAltText(defaultProps.imageAlt);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', defaultProps.imageUrl);
  });

  test('renders Card without description and image when not provided', () => {
    const { description, imageUrl, ...restProps } = defaultProps;
    render(<Card {...restProps} />);
    const titleElement = screen.getByText(restProps.title);
    const descriptionElement = screen.queryByText(defaultProps.description);
    const imageElement = screen.queryByAltText(defaultProps.imageAlt);

    expect(titleElement).toBeInTheDocument();
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

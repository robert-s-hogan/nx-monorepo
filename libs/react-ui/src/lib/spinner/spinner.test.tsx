import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Spinner } from './Spinner';

describe('Spinner component', () => {
  const defaultProps = {
    size: 'medium',
  };

  test('renders Spinner with default size', () => {
    render(<Spinner />);
    const spinnerElement = screen.getByTestId('spinner');

    expect(spinnerElement).toBeInTheDocument();
    expect(spinnerElement).toHaveClass(defaultProps.size);
  });

  test('renders Spinner with specified size', () => {
    render(<Spinner size="large" />);
    const spinnerElement = screen.getByTestId('spinner');

    expect(spinnerElement).toBeInTheDocument();
    expect(spinnerElement).toHaveClass('large');
  });
});

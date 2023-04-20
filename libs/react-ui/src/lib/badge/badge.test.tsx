import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Badge } from './Badge';

describe('Badge component', () => {
  const defaultProps = {
    value: 42,
    variant: 'primary',
    max: 99,
  };

  test('renders Badge with value and variant', () => {
    render(<Badge {...defaultProps} />);
    const badgeElement = screen.getByText(defaultProps.value.toString());

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass(defaultProps.variant);
  });

  test('renders Badge with max value when value exceeds max', () => {
    const updatedProps = { ...defaultProps, value: 100 };
    render(<Badge {...updatedProps} />);
    const badgeElement = screen.getByText(`${defaultProps.max}+`);

    expect(badgeElement).toBeInTheDocument();
  });
});

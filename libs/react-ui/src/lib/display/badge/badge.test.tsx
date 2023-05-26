import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Badge } from './Badge';

describe('Badge component', () => {
  const defaultProps = {
    value: 42,
    className: 'primary',
    max: 99,
  };

  test('renders Badge with value and className', () => {
    render(<Badge {...defaultProps} />);
    const badgeElement = screen.getByText(defaultProps.value.toString());

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.parentElement).toHaveClass(defaultProps.className);
  });

  test('renders Badge with max value when value exceeds max', () => {
    const updatedProps = { ...defaultProps, value: 100 };
    render(<Badge {...updatedProps} />);
    const badgeElement = screen.getByText(`${defaultProps.max}+`);

    expect(badgeElement).toBeInTheDocument();
  });

  test('renders Badge with correct shape class based on number of digits', () => {
    const singleDigitProps = { value: 5, className: 'primary' };
    const doubleDigitProps = { value: 42, className: 'primary' };
    const tripleDigitProps = { value: 123, className: 'primary', max: 99 };

    render(<Badge {...singleDigitProps} />);
    const singleDigitBadge = screen.getByText(
      singleDigitProps.value.toString()
    );
    expect(singleDigitBadge.parentElement).toHaveClass('singleDigit');

    render(<Badge {...doubleDigitProps} />);
    const doubleDigitBadge = screen.getByText(
      doubleDigitProps.value.toString()
    );
    expect(doubleDigitBadge.parentElement).toHaveClass('doubleDigits');

    render(<Badge {...tripleDigitProps} />);
    const tripleDigitBadge = screen.getByText(`${tripleDigitProps.max}+`);
    expect(tripleDigitBadge.parentElement).toHaveClass('tripleDigits');
  });
});

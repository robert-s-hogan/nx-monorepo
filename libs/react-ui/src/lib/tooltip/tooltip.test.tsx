import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Tooltip } from './tooltip';

describe('Tooltip component', () => {
  const defaultProps = {
    tooltipText: 'Sample Tooltip',
    className: 'bg-primary text-white px-2 py-1 rounded',
  };

  test('renders Tooltip with tooltipText', () => {
    render(<Tooltip {...defaultProps} />);
    const tooltipElement = screen.getByText(defaultProps.tooltipText);
    expect(tooltipElement).toBeInTheDocument();
  });

  test('renders Tooltip with correct className', () => {
    render(<Tooltip {...defaultProps} />);
    const tooltipElement = screen.getByText(defaultProps.tooltipText);

    expect(tooltipElement).toHaveClass(defaultProps.className);
  });

  test('renders Tooltip with icon', () => {
    const icon = (
      <span role="img" aria-label="rocket" className="mr-2">
        🚀
      </span>
    );
    render(<Tooltip {...defaultProps} icon={icon} />);
    const iconElement = screen.getByRole('img', { name: 'rocket' });

    expect(iconElement).toBeInTheDocument();
  });

  test('renders Tooltip with children instead of tooltipText', () => {
    const childrenText = 'Children Tooltip';
    render(<Tooltip {...defaultProps} children={childrenText} />);
    const childrenElement = screen.getByText(childrenText);

    expect(childrenElement).toBeInTheDocument();
    expect(
      screen.queryByText(defaultProps.tooltipText)
    ).not.toBeInTheDocument();
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Tooltip } from './tooltip';

describe('Tooltip component', () => {
  const defaultProps = {
    tooltipText: 'Sample Tooltip',
    className: 'bg-primary text-white px-2 py-1 rounded',
    icon: <span>i</span>,
  };

  // Tooltip only reveals its text span on hover (onMouseEnter), so every
  // assertion on tooltipText needs to trigger that first.
  test('renders Tooltip with tooltipText on hover', () => {
    render(<Tooltip {...defaultProps} />);
    fireEvent.mouseEnter(document.querySelector('.tooltip')!);
    const tooltipElement = screen.getByText(defaultProps.tooltipText);
    expect(tooltipElement).toBeInTheDocument();
  });

  test('renders Tooltip with correct className on hover', () => {
    render(<Tooltip {...defaultProps} />);
    fireEvent.mouseEnter(document.querySelector('.tooltip')!);
    const tooltipElement = screen.getByText(defaultProps.tooltipText);

    expect(tooltipElement).toHaveClass(defaultProps.className);
  });

  test('renders Tooltip with icon', () => {
    const icon = (
      <span role="img" aria-label="rocket">
        🚀
      </span>
    );
    render(<Tooltip {...defaultProps} icon={icon} />);
    const iconElement = screen.getByRole('img', { name: 'rocket' });

    expect(iconElement).toBeInTheDocument();
  });

  test('hides tooltipText until hovered', () => {
    render(<Tooltip {...defaultProps} />);
    expect(screen.queryByText(defaultProps.tooltipText)).not.toBeInTheDocument();

    fireEvent.mouseEnter(document.querySelector('.tooltip')!);
    expect(screen.getByText(defaultProps.tooltipText)).toBeInTheDocument();

    fireEvent.mouseLeave(document.querySelector('.tooltip')!);
    expect(screen.queryByText(defaultProps.tooltipText)).not.toBeInTheDocument();
  });
});

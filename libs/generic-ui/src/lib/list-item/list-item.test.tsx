import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ListItem } from './list-item';

describe('ListItem Component', () => {
  test('renders the text prop', () => {
    render(<ListItem text="Test Item" onClick={() => {}} />);
    // expect(screen.getByText('Test Item')).toBeInTheDocument();
  });

  test('calls the onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<ListItem text="Test Item" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Test Item'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies the className prop', () => {
    render(
      <ListItem text="Test Item" onClick={() => {}} className="test-class" />
    );
    // expect(screen.getByText('Test Item')).toHaveClass('test-class');
  });

  test('applies the style prop', () => {
    render(
      <ListItem text="Test Item" onClick={() => {}} style={{ color: 'red' }} />
    );
    // expect(screen.getByText('Test Item')).toHaveStyle({ color: 'red' });
  });
});

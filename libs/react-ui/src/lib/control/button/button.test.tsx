//button.test.tsx
import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  test('renders Button component', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  test('renders loading state correctly', () => {
    render(<Button isLoading>Click me</Button>);
    const loadingElement = screen.getByRole('button').parentElement;
    expect(loadingElement).toHaveClass('animate-pulse');
  });

  test('handles click event', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('disabled button does not handle click', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});

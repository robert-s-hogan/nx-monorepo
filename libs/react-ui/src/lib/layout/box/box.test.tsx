//libs/react-ui/src/lib/box/box.test.tsx
import { render, fireEvent, screen } from '@testing-library/react';
import Box from './box';

describe('Box', () => {
  const id = 'test-id';
  const className = 'test-class';
  const role = 'presentation';
  const style = { color: 'blue' };
  const childText = 'Test Child';
  const handleClick = jest.fn();

  it('renders correctly', () => {
    const { container } = render(<Box id={id}>{childText}</Box>);
    expect(container).toMatchSnapshot();
  });

  it('renders children and applies passed props', () => {
    render(
      <Box id={id} className={className} role={role} style={style}>
        {childText}
      </Box>
    );

    const box = screen.getByRole(role) as HTMLElement;

    expect(screen.getByText(childText)).toBeInTheDocument();
    expect(box).toHaveAttribute('id', id);
    expect(box).toHaveClass('box', className);
    expect(box).toHaveStyle({ color: 'blue' });
  });

  it('handles onClick event', () => {
    render(<Box onClick={handleClick}>{childText}</Box>);

    fireEvent.click(screen.getByText(childText));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

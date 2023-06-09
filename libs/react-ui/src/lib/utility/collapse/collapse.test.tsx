//libs/react-ui/src/lib/collapse/collapse.test.tsx
import { render, fireEvent, screen } from '@testing-library/react';
import Collapse from './collapse';

describe('Collapse', () => {
  const title = 'Test Title';
  const childText = 'Test Child';

  it('renders correctly', () => {
    const { container } = render(
      <Collapse title={title}>{childText}</Collapse>
    );
    expect(container).toMatchSnapshot();
  });

  it('shows the title', () => {
    render(<Collapse title={title}>{childText}</Collapse>);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('toggles the children when button is clicked', () => {
    render(<Collapse title={title}>{childText}</Collapse>);

    // Initially children should not be visible
    expect(screen.queryByText(childText)).toBeNull();

    // After clicking the button, children should be visible
    fireEvent.click(screen.getByText(title));
    expect(screen.getByText(childText)).toBeInTheDocument();

    // After clicking the button again, children should not be visible
    fireEvent.click(screen.getByText(title));
    expect(screen.queryByText(childText)).toBeNull();
  });
});

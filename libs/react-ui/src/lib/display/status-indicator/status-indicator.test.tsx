import { render } from '@testing-library/react';
import { StatusIndicator } from './statusIndicator';

describe('StatusIndicator', () => {
  test('renders StatusIndicator component', () => {
    const { container } = render(<StatusIndicator status="online" />);

    expect(container.firstChild).toHaveClass('bg-green-500');
  });
});

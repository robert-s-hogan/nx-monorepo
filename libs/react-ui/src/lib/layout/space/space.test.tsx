import { render } from '@testing-library/react';
import { Space } from './space';

describe('Space', () => {
  test('renders Space component', () => {
    const { container } = render(<Space size="4" />);
    expect(container.firstChild).toBeInTheDocument();
  });
});

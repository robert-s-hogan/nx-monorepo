import { render } from '@testing-library/react';
import { Icon } from './icon';

describe('Icon', () => {
  test('renders Icon component', () => {
    const { container } = render(<Icon name="add" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});

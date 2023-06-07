import { render } from '@testing-library/react';
import { Divider } from './divider';

describe('Divider', () => {
  test('renders Divider component', () => {
    const { container } = render(<Divider color="gray-200" />);
    expect(container.firstChild.nodeName).toBe('HR');
  });
});

import { render } from '@testing-library/react';
import { Sidebar } from './sidebar';

describe('Sidebar', () => {
  test('renders Sidebar component with children', () => {
    const { getByText } = render(
      <Sidebar width="64">
        <div>Sidebar Content</div>
      </Sidebar>
    );

    expect(getByText('Sidebar Content')).toBeInTheDocument();
  });
});

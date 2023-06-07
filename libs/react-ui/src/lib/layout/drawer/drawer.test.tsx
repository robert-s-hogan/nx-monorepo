import { render } from '@testing-library/react';
import { Drawer } from './drawer';

describe('Drawer', () => {
  test('renders Drawer component with children', () => {
    const { getByText } = render(
      <Drawer isOpen={true}>
        <div>Drawer Content</div>
      </Drawer>
    );

    expect(getByText('Drawer Content')).toBeInTheDocument();
  });
});

import { render } from '@testing-library/react';
import { Toast } from './toast';

describe('Toast', () => {
  test('renders Toast component', () => {
    const { getByText } = render(
      <Toast message="Test message" type="success" isVisible={true} />
    );

    expect(getByText('Test message')).toBeInTheDocument();
  });
});

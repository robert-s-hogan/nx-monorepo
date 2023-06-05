import { render } from '@testing-library/react';
import { Alert } from './alert';

describe('Alert', () => {
  test('renders Alert component', () => {
    const { getByText } = render(
      <Alert message="Test message" type="success" />
    );

    expect(getByText('Test message')).toBeInTheDocument();
  });
});

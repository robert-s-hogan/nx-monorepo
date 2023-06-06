import { render } from '@testing-library/react';
import { Snackbar } from './snackbar';

describe('Snackbar', () => {
  test('renders Snackbar component', () => {
    const { getByText } = render(
      <Snackbar message="Test message" type="success" isVisible={true} />
    );

    expect(getByText('Test message')).toBeInTheDocument();
  });
});

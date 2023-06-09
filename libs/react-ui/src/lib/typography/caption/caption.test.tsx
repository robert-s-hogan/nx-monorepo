import { render } from '@testing-library/react';
import { Caption } from './caption';

describe('Caption', () => {
  test('renders Caption component', () => {
    const { getByText } = render(<Caption text="Test Caption" />);

    expect(getByText('Test Caption')).toBeInTheDocument();
  });
});

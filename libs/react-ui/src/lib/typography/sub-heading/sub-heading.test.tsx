import { render } from '@testing-library/react';
import { Subheading } from './subheading';

describe('Subheading', () => {
  test('renders Subheading component', () => {
    const { getByText } = render(<Subheading text="Test Subheading" />);

    expect(getByText('Test Subheading')).toBeInTheDocument();
  });
});

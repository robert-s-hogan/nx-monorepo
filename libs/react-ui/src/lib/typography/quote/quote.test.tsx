import { render } from '@testing-library/react';
import { Quote } from './quote';

describe('Quote', () => {
  test('renders Quote component', () => {
    const { getByText } = render(<Quote text="Test Quote" author="Author" />);

    expect(getByText('Test Quote')).toBeInTheDocument();
    expect(getByText('Author')).toBeInTheDocument();
  });
});

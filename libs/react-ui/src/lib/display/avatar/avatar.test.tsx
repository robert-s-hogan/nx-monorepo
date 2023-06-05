import { render } from '@testing-library/react';
import { Avatar } from './avatar';

describe('Avatar', () => {
  test('renders Avatar component with image', () => {
    const { getByAltText } = render(
      <Avatar src="test.jpg" alt="Test Avatar" size="medium" />
    );

    expect(getByAltText('Test Avatar')).toBeInTheDocument();
  });

  test('renders Avatar component with alt text', () => {
    const { getByText } = render(<Avatar alt="Test Avatar" size="medium" />);

    expect(getByText('Test Avatar')).toBeInTheDocument();
  });
});

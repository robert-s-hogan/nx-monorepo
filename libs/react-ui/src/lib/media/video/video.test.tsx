import { render } from '@testing-library/react';
import { Video } from './video';

describe('Video', () => {
  test('renders Video component', () => {
    const { getByTestId } = render(<Video src="test.mp4" size="medium" />);

    expect(getByTestId('video')).toBeInTheDocument();
  });
});

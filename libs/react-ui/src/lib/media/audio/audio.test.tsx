import { render } from '@testing-library/react';
import { Audio } from './audio';

describe('Audio', () => {
  test('renders Audio component', () => {
    const { getByTestId } = render(<Audio src="test.mp3" />);

    expect(getByTestId('audio')).toBeInTheDocument();
  });
});

import { render } from '@testing-library/react';
import { Stack } from './stack';

describe('Stack', () => {
  test('renders Stack component with children', () => {
    const { getByText } = render(
      <Stack spacing={4}>
        <div>Child 1</div>
        <div>Child 2</div>
      </Stack>
    );

    expect(getByText('Child 1')).toBeInTheDocument();
    expect(getByText('Child 2')).toBeInTheDocument();
  });
});

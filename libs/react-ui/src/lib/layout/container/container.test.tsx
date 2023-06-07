import { render } from '@testing-library/react';
import { Container } from './container';

describe('Container', () => {
  test('renders Container component with children', () => {
    const { getByText } = render(
      <Container maxWidth="xl">
        <div>Child content</div>
      </Container>
    );

    expect(getByText('Child content')).toBeInTheDocument();
  });
});

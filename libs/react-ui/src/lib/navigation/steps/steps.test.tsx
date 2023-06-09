import { render } from '@testing-library/react';
import { Steps } from './steps';

describe('Steps', () => {
  const steps = ['Step 1', 'Step 2', 'Step 3'];

  test('renders Steps component', () => {
    const { getByText } = render(<Steps currentStep={1} steps={steps} />);

    expect(getByText('Step 1')).toBeInTheDocument();
    expect(getByText('Step 2')).toBeInTheDocument();
    expect(getByText('Step 3')).toBeInTheDocument();
  });

  test('active step is correctly highlighted', () => {
    const { container } = render(<Steps currentStep={2} steps={steps} />);

    expect(container.querySelectorAll('.bg-green-500')).toHaveLength(2);
  });
});

import { render, fireEvent } from '@testing-library/react';
import { ValidatedInput } from './validatedInput';

describe('ValidatedInput', () => {
  const mockChangeHandler = jest.fn();

  test('renders ValidatedInput component', () => {
    const { getByDisplayValue } = render(
      <ValidatedInput
        value="Test input"
        onChange={mockChangeHandler}
        feedback="Test feedback"
        isValid={false}
      />
    );

    expect(getByDisplayValue('Test input')).toBeInTheDocument();
  });

  test('displays feedback when isValid is false', () => {
    const { getByText } = render(
      <ValidatedInput
        value="Test input"
        onChange={mockChangeHandler}
        feedback="Test feedback"
        isValid={false}
      />
    );

    expect(getByText('Test feedback')).toBeInTheDocument();
  });

  test('calls onChange when input is changed', () => {
    const { getByDisplayValue } = render(
      <ValidatedInput
        value="Test input"
        onChange={mockChangeHandler}
        feedback="Test feedback"
        isValid={true}
      />
    );

    fireEvent.change(getByDisplayValue('Test input'), {
      target: { value: 'New input' },
    });

    expect(mockChangeHandler).toHaveBeenCalledTimes(1);
  });
});

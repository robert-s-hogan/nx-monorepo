// time-picker.test.tsx
import { render, fireEvent } from '@testing-library/react';
import { TimePicker } from './time-picker';

describe('TimePicker', () => {
  const mockTimeChangeHandler = jest.fn();

  test('renders TimePicker component', () => {
    const { getByValue } = render(<TimePicker onTimeChange={mockTimeChangeHandler} />);

    // Check if hours and minutes dropdown are present
    expect(getByValue('00')).toBeInTheDocument();
  });

  test('changes hour and minute when a new time is selected', () => {
    const { getByDisplayValue } = render(<TimePicker onTimeChange={mockTimeChangeHandler} />);

    fireEvent.change(getByDisplayValue('00'), { target: { value: '12' } });
    fireEvent.change(getByDisplayValue('00'), {

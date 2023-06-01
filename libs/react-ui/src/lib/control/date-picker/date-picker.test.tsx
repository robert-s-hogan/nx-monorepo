//libs/react-ui/src/lib/control/date-picker/date-picker.spec.tsx
import { render, fireEvent } from '@testing-library/react';
import { DatePicker } from './date-picker';

describe('DatePicker', () => {
  const mockDateChangeHandler = jest.fn();

  test('renders DatePicker component', () => {
    const { getByText } = render(
      <DatePicker onDateChange={mockDateChangeHandler} />
    );

    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', {
      month: 'long',
    });

    expect(getByText(currentMonth)).toBeInTheDocument();
    expect(getByText(currentDate.getFullYear().toString())).toBeInTheDocument();
  });

  test('changes month when prev and next buttons are clicked', () => {
    const { getByText } = render(
      <DatePicker onDateChange={mockDateChangeHandler} />
    );

    fireEvent.click(getByText('Prev'));
    fireEvent.click(getByText('Next'));

    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', {
      month: 'long',
    });

    expect(getByText(currentMonth)).toBeInTheDocument();
    expect(getByText(currentDate.getFullYear().toString())).toBeInTheDocument();
  });

  test('calls onDateChange when a date is clicked', () => {
    const { getByText } = render(
      <DatePicker onDateChange={mockDateChangeHandler} />
    );

    fireEvent.click(getByText('1'));

    expect(mockDateChangeHandler).toHaveBeenCalledTimes(1);
  });
});

//libs/react-ui/src/lib/control/date-picker/date-picker.tsx
import React, { useState } from 'react';
import { DatePickerProps } from '@with-nx/types';

export const DatePicker: React.FC<DatePickerProps> = ({ onDateChange }) => {
  const [displayDate, setDisplayDate] = useState(new Date());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = new Date(
    displayDate.getFullYear(),
    displayDate.getMonth() + 1,
    0
  ).getDate();

  const daysArray = [...Array(daysInMonth)].map((_, i) => i + 1);
  const firstDayOfWeek = new Date(
    displayDate.getFullYear(),
    displayDate.getMonth(),
    1
  ).getDay();

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between">
        <button
          onClick={() =>
            setDisplayDate(
              (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
            )
          }
        >
          Prev
        </button>
        <div>{`${displayDate.toLocaleString('default', {
          month: 'long',
        })} ${displayDate.getFullYear()}`}</div>
        <button
          onClick={() =>
            setDisplayDate(
              (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
            )
          }
        >
          Next
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 mt-4">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center">
            {day}
          </div>
        ))}
        {[...Array(firstDayOfWeek)].map((_, i) => (
          <div key={i} />
        ))}
        {daysArray.map((day) => (
          <button
            key={day}
            className="text-center"
            onClick={() =>
              onDateChange(
                new Date(displayDate.getFullYear(), displayDate.getMonth(), day)
              )
            }
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

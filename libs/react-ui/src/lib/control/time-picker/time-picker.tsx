//libs/react-ui/src/lib/control/time-picker/time-picker.tsx
import React, { useState } from 'react';
import { TimePickerProps } from '@with-nx/types';

export const TimePicker: React.FC<TimePickerProps> = ({ onTimeChange }) => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);

  const hours = [...Array(24)].map((_, i) => i);
  const minutes = [...Array(60)].map((_, i) => i);

  const handleHourChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newHour = parseInt(event.target.value);
    setHour(newHour);
    onTimeChange(newHour, minute);
  };

  const handleMinuteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newMinute = parseInt(event.target.value);
    setMinute(newMinute);
    onTimeChange(hour, newMinute);
  };

  return (
    <div className="flex space-x-2">
      <select
        className="border rounded p-1"
        value={hour}
        onChange={handleHourChange}
      >
        {hours.map((hr) => (
          <option key={hr} value={hr}>
            {hr.toString().padStart(2, '0')}
          </option>
        ))}
      </select>
      <span>:</span>
      <select
        className="border rounded p-1"
        value={minute}
        onChange={handleMinuteChange}
      >
        {minutes.map((min) => (
          <option key={min} value={min}>
            {min.toString().padStart(2, '0')}
          </option>
        ))}
      </select>
    </div>
  );
};

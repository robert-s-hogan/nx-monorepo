import React, { ChangeEvent } from 'react';
import { SliderProps } from '@with-nx/types';

export const Slider = ({
  value,
  min = 0,
  max = 100,
  onChange,
  className = '',
}: SliderProps): JSX.Element => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={handleChange}
      className={`appearance-none w-full h-2 rounded-full bg-gray-200 focus:outline-none ${className}`}
    />
  );
};

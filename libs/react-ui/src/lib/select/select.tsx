import React from 'react';
import { SelectProps } from '@with-nx/types';

export const Select = ({
  options,
  onChange,
  value,
  className,
  id,
  style,
  required,
}: SelectProps) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <select
      className={className}
      id={id}
      style={style}
      required={required}
      value={value}
      onChange={handleOnChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;

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

  const baseClass =
    'border border-gray-300 rounded-md text-gray-700 h-10 pl-5 pr-10 bg-white hover:border-gray-400';
  const combinedClass = className ? className : baseClass;

  return (
    <select
      className={combinedClass}
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

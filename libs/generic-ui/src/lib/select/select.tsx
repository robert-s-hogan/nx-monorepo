import React from 'react';
import { SelectProps } from '@with-nx/types';

export const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  onChange,
  value,
  className,
  id,
  style,
  required,
  placeholder, // Make sure this is handled in the component
}) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select
        name={name}
        className={className}
        id={id}
        style={style}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}{' '}
        // Handles placeholder
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

/*
  Example usage:

  import React, { useState } from 'react';
  import Dropdown from './Dropdown';

  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
  ];

  const MyComponent = () => {
    const [selectedOption, setSelectedOption] = useState(1);

    const handleDropdownChange = (value: number) => {
      setSelectedOption(value);
    };

    return (
      <div>
        <Dropdown options={options} value={selectedOption} onChange={handleDropdownChange} />
      </div>
    );
  };

*/

export interface DropdownOption {
  label: string;
  value: string | number;
}

/* eslint-disable-next-line */
export interface DropdownProps {
  options: DropdownOption[];
  value: string | number;
  onChange: (value: string | number) => void;
  className?: string;
}

export function Dropdown({ options, value, onChange }: DropdownProps) {
  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <select value={value} onChange={handleOnChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;

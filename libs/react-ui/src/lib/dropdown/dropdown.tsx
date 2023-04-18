/*

 * Dropdown (Molecule)
 * The Dropdown component is a molecule that represents a select input. It accepts an array of options and a selected value as props, and renders a select element with the specified options. It also accepts an `onChange` prop, which is called when the selected value changes.
 *
 * Props:
 * options (DropdownOption[]): An array of objects representing the available options in the dropdown. Each object should have a `label` and a `value` property.
 * value (string | number): The currently selected value in the dropdown.
 * onChange (function): A function to be called when the selected value in the dropdown changes. It receives the new selected value as an argument.
 * className (string): A string of custom class names to apply to the select element.

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

export function Dropdown({
  options,
  value,
  onChange,
  className,
}: DropdownProps) {
  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <select className={className} value={value} onChange={handleOnChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;

/**
  Select (Atom)
  The Select component is an atom that represents a basic dropdown element. It consists of a select element with the specified options, onChange, value, className, id, and style props.
  Props:
  options (SelectOption[]): An array of SelectOption objects that represents the available options for the select element.
  onChange (function): A function that will be called when the selected option changes.
  value (string): The value of the currently selected option.
  className (string): A class name to be added to the select element.
  id (string): A unique identifier for the element, which can be used for styling or for JavaScript manipulation.
  style (object): An object containing CSS styles to be applied to the select element.
  ariaLabel (string): A string to be used as an accessible label for the select element.
  required (boolean): A boolean value indicating if the input is required.
  EXAMPLE USAGE:
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];
    function App() {
      const [selectedOption, setSelectedOption] = useState('option1');
      
      const handleChange = (value: string) => {
        setSelectedOption(value);
      };
      return (
        <Select options={options} onChange={handleChange} value={selectedOption} />
      );
    }
*/

import React, { useState } from 'react';

/* eslint-disable-next-line */
export interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
  required?: boolean;
}

interface SelectOption {
  value: string;
  label: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  onChange,
  value,
  className,
  id,
  style,
  ariaLabel,
  required,
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <select
      className={className}
      id={id}
      style={style}
      aria-label={ariaLabel}
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

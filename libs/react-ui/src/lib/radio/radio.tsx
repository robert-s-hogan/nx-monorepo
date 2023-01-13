/**
  RadioButton (Atom)
  The RadioButton component is an atom that represents a basic radio button form input element. It consists of a input element with the specified label, name, value, checked, onChange, className, id, style, onClick, ariaLabel, and required props.
  Props:
  label (string): The text label for the radio button.
  name (string): The name attribute for the radio button element, it used for linking the related radio buttons together so that they can be selected one at a time.
  value (string): The value attribute for the radio button element, it will be passed to the onChange function.
  checked (boolean): A boolean value which reflects whether this radio button is selected.
  onChange (function): A callback function that is called when the radio button is selected. The callback receives the value attribute as a string.
  className (string): A class name to be added to the radio button element.
  id (string): A unique identifier for the element, which can be used for styling or for JavaScript manipulation.
  style (object): An object containing CSS styles to be applied to the radio button element.
  onClick (function): A function that will be called when the radio button is clicked.
  ariaLabel (string): A string to be used as an accessible label for the radio button element.
  required (boolean): A boolean value indicating if the radio button is required.
*/

import React from 'react';

/* eslint-disable-next-line */
export interface RadioProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export const Radio: React.FC<RadioProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={handleChange}
        />
        {label}
      </label>
    </div>
  );
};

export default Radio;

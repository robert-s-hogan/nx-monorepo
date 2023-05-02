/**
  Checkbox (Atom)
  The Checkbox component is an atom that represents a basic checkbox form input element. It consists of a input element with the specified label, name, onChange, className, id, style, onClick, ariaLabel, and required props.
  Props:
  label (string): The text label for the checkbox.
  onChange (function): A function that will be called when the checkbox value changes. 
                      The callback receives the new checked state as a boolean.
  className (string): A class name to be added to the checkbox element.
  id (string): A unique identifier for the element, which can be used for styling or for JavaScript manipulation.
  style (object): An object containing CSS styles to be applied to the checkbox element.
  onClick (function): A function that will be called when the checkbox is clicked.
  ariaLabel (string): A string to be used as an accessible label for the checkbox element.
  required (boolean): A boolean value indicating if the checkbox is required.
*/

import { useState } from 'react';
import checkboxStyles from './checkbox.module.css';

/* eslint-disable-next-line */
export interface CheckboxProps {
  label: string;
  onChange: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    onChange(event.target.checked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span className={checkboxStyles.labelText}>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;

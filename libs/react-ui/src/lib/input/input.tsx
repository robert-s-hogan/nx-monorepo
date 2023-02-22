/**
  Input (Atom)
  The Input component is an atom that represents a basic form input element. It consists of a input element with the specified label, type, name, value, onChange, className, id, style, onClick, ariaLabel, and required props.
  Props:
  label (string): The text label for the form input.
  type (string): The type of the input element, can be one of text, email, password, etc.
  name (string): The name of the input element, for linking with the corresponding label element.
  value (any): The value of the input element.
  onChange (function): A function that will be called when the input value changes.
  className (string): A class name to be added to the input element.
  id (string): A unique identifier for the element, which can be used for styling or for JavaScript manipulation.
  style (object): An object containing CSS styles to be applied to the input element.
  onClick (function): A function that will be called when the input is clicked.
  ariaLabel (string): A string to be used as an accessible label for the input element.
  required (boolean): A boolean value indicating if the input is required.
*/

import React from 'react';

/* eslint-disable-next-line */
export interface InputProps {
  label: string;
  type: string;
  name: string;
  value: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  ariaLabel?: string;
  required?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  className,
  id,
  style,
  onClick,
  ariaLabel,
  required,
}) => {
  return (
    <div className={className} style={style}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onClick={onClick}
        aria-label={ariaLabel}
        required={required}
      />
    </div>
  );
};

export default Input;

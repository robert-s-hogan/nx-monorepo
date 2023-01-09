/**
  Button (Atom)
  The Button component is an atom that represents a basic button element. It consists of a button element with the specified type, label, and onClick props.

  Props
  type (string): The type of the button element. Can be one of "button", "submit", or "reset".
  label (string): The label for the button.
  onClick (function): A function to be called when the button is clicked.
*/

import React, { ButtonHTMLAttributes } from 'react';

/* eslint-disable-next-line */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  onClick,
  type,
  className,
  ...props
}) => (
  <button type={type} onClick={onClick} className={className} {...props}>
    {icon ? icon : null} {label ? label : null}
  </button>
);

export default Button;

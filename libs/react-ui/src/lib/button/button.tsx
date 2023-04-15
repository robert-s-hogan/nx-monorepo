/**
  Button (Atom)
  The Button component is an atom that represents a basic button element. It consists of a button element with the specified type, label, icon, onClick, className, disabled, style, title, and aria-label props.

  Props
  label (string): The label for the button.
  icon (React.ReactNode): A React element or node to be rendered before the label.
  onClick (function): A function to be called when the button is clicked.
  type (string): The type of the button element. Can be one of "button", "submit", or "reset".
  className (string): A class name to be added to the button element.
  disabled (boolean): A boolean value indicating whether the button should be disabled.
  style (object): An object containing CSS styles to be applied to the button element.
  title (string): A string to be displayed as a tooltip when the button is hovered.
  aria-label (string): A string to be used as an accessible label for the button element.
*/

import React, { ButtonHTMLAttributes } from 'react';
import buttonStyles from './button.module.css';

/* eslint-disable-next-line */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  title?: string;
  'aria-label'?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  onClick,
  type,
  className,
  disabled,
  style,
  title,
  ...props
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`${buttonStyles.button} ${className}`}
    disabled={disabled}
    style={style}
    title={title}
    {...props}
  >
    {children ? children : null} {icon ? icon : null}
  </button>
);

export default Button;

import React, { ButtonHTMLAttributes } from 'react';
import buttonStyles from './button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  icon,
  disabled,
  style,
  loading,
  className = '',
  type = 'button',
  ...props
}) => (
  <button
    className={`button ${buttonStyles.button} ${className} ${
      icon ? `button-group ${buttonStyles.buttonRow}` : ''
    }`}
    disabled={disabled || loading}
    style={style}
    type={type}
    {...props}
  >
    {icon ? icon : null} {props.children}
    {loading ? (
      <div className={`button-loader ${buttonStyles.loader}`}></div>
    ) : null}
  </button>
);

export default Button;

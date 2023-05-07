import React, { ButtonHTMLAttributes } from 'react';
import buttonStyles from './button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
  loading?: boolean;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  icon,
  disabled,
  style,
  loading,
  children,
  className = '',
  ...props
}) => (
  <button
    className={`button ${buttonStyles.button} ${className} ${
      icon ? `button-group ${buttonStyles.buttonRow}` : ''
    } `}
    disabled={disabled || loading}
    style={style}
    {...props}
  >
    {icon ? icon : null} {children}
    {loading ? (
      <span className={`button-loader ${buttonStyles.loader}`}></span>
    ) : null}
  </button>
);

export default Button;

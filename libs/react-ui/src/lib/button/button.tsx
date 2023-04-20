import React, { ButtonHTMLAttributes } from 'react';
import buttonStyles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  'aria-label'?: string;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  onClick,
  type,
  className,
  disabled,
  style,
  title,
  loading,
  ...props
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`${buttonStyles.button} ${className} ${
      icon ? buttonStyles.buttonRow : ''
    } `}
    disabled={disabled || loading}
    style={style}
    {...props}
  >
    {icon ? icon : null} {label}
    {loading ? <span className={buttonStyles.loader}></span> : null}
  </button>
);

export default Button;

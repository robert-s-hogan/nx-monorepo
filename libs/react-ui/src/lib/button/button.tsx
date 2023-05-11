import React from 'react';
import buttonStyles from './button.module.css';
import { ButtonProps } from '@with-nx/types';

export const Button = ({
  icon,
  disabled,
  style,
  loading,
  className = '',
  type = 'button',
  ...props
}: ButtonProps): JSX.Element => (
  <button
    className={`${className ? className : `${buttonStyles.button} button`} ${
      icon ? `${buttonStyles.buttonRow} button-group` : ''
    }`}
    disabled={disabled || loading}
    style={style}
    type={type}
    {...props}
  >
    {icon ? icon : null} {props.children}
    {loading ? (
      <div
        className={
          className ? className : `${buttonStyles.loader} button-loader`
        }
      ></div>
    ) : null}
  </button>
);

export default Button;

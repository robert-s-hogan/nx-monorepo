import React from 'react';
import buttonStyles from './button.module.css';
import { ButtonProps } from '@with-nx/types';
import { Skeleton } from '../skeleton/skeleton'; // Import Skeleton component

export const Button = ({
  icon,
  disabled,
  style,
  loading,
  className = '',
  type = 'button',
  isLoading,
  width,
  height,
  ...props
}: ButtonProps & {
  isLoading?: boolean;
}): JSX.Element => {
  return isLoading ? (
    // Use Skeleton component when loading
    <Skeleton
      isLoading={isLoading}
      height={height || '40px'} // Default height for buttons
      width={width || '180px'} // Default width
      borderRadius="4px" // You can adjust this as needed
    />
  ) : (
    <button
      className={`${
        className ? className : `${buttonStyles['button']} button`
      } ${icon ? `${buttonStyles['buttonRow']} button-group` : ''}`}
      disabled={disabled || loading}
      style={style}
      type={type}
      {...props}
    >
      {icon ? icon : null} {props.children}
      {loading ? (
        <div
          className={
            className ? className : `${buttonStyles['loader']} button-loader`
          }
        ></div>
      ) : null}
    </button>
  );
};

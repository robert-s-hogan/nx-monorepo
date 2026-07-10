import React from 'react';
import buttonStyles from './button.module.css';
import { ButtonProps, ButtonVariant } from '@with-nx/types';
import { Skeleton } from '../skeleton/skeleton'; // Import Skeleton component

// Flat, solid-color Tailwind treatments standing in for generic-ui's old
// theme prop (which drove color via global CSS custom properties). Shared
// with IconButton so both components read as the same design language.
export const BUTTON_VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  success: 'bg-green-600 text-white hover:bg-green-700',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  warning: 'bg-yellow-500 text-gray-900 hover:bg-yellow-600',
  info: 'bg-sky-500 text-white hover:bg-sky-600',
};

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
  variant,
  ...props
}: ButtonProps & {
  isLoading?: boolean;
}): JSX.Element => {
  const defaultClassName = variant
    ? `${buttonStyles['button']} button px-4 py-2 rounded font-medium ${BUTTON_VARIANT_CLASSES[variant]}`
    : `${buttonStyles['button']} button`;

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
        className ? className : defaultClassName
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

import React from 'react';
import { ButtonProps } from '@with-nx/types';

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
    <div
      className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"
      style={{
        width: `${width ? `${width}px` : 'w-full'}`,
        height: `${height ? `${height}px` : 'h-full'}`,
      }}
    ></div>
  ) : (
    <button
      className={`${
        className
          ? className
          : 'transform transition-all duration-300 hover:scale-105'
      } ${icon ? 'flex justify-between items-center' : ''}`}
      disabled={disabled || loading}
      style={style}
      type={type}
      {...props}
    >
      {icon ? icon : null} {props.children}
      {loading ? (
        <div className={`animate-spin ml-2 ${className}`}></div>
      ) : null}
    </button>
  );
};

export default Button;

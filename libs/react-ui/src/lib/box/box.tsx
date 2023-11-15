import React from 'react';
import reactUIBoxStyles from './box.module.css';
import { BoxProps } from '@with-nx/types';
import Skeleton from '../skeleton/skeleton';

export function Box({
  id,
  children,
  className,
  role,
  onClick,
  style,
  isLoading = false, // Add isLoading prop
}: BoxProps) {
  // If loading, render the Skeleton instead of children
  if (isLoading) {
    return (
      <div
        className={`box ${reactUIBoxStyles.box} ${className}`}
        id={id}
        role={role}
        onClick={onClick}
        style={style}
      >
        <Skeleton isLoading={true} />
      </div>
    );
  }

  // Render normal content if not loading
  return (
    <div
      className={`box ${reactUIBoxStyles.box} ${className}`}
      id={id}
      role={role}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
}

export default Box;

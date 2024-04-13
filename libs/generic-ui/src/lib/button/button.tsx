import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  ariaLabel,
  ...props
}) => {
  return (
    <button
      {...props}
      className={className}
      aria-label={ariaLabel || undefined}
    >
      {children}
    </button>
  );
};

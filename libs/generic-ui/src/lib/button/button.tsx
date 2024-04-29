import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  theme:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'warning'
    | 'success'
    | 'info';
}

const themeClassNames = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  tertiary: 'btn-tertiary',
  danger: 'btn-danger',
  warning: 'btn-warning',
  success: 'btn-success',
  info: 'btn-info',
};

export const Button = ({ text, theme, ...props }: ButtonProps) => {
  const className = `${themeClassNames[theme] || 'btn-primary'} ${
    props.className || ''
  }`;
  return (
    <button {...props} className={className}>
      {text}
    </button>
  );
};

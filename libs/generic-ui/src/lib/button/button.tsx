import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  theme:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'warning'
    | 'success'
    | 'info'
    | 'disabled';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
}

const themeClassNames = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  tertiary: 'btn-tertiary',
  danger: 'btn-danger',
  warning: 'btn-warning',
  success: 'btn-success',
  info: 'btn-info',
  disabled: 'btn-disabled',
};

const sizeClassNames = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
};

export const Button = ({
  className,
  size,
  text,
  theme,
  type,
  ...props
}: ButtonProps) => {
  const themeClassName = `${themeClassNames[theme] || 'btn-primary'} ${
    sizeClassNames[size || 'md']
  } ${className || ''}`;

  return (
    <button {...props} className={themeClassName} aria-label={text} type={type}>
      {text}
    </button>
  );
};

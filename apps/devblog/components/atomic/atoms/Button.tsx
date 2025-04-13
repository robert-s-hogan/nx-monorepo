// apps/devblog/components/atomic/atoms/Button.tsx
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  theme?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

const themeClassNames = {
  primary: 'bg-primary text-white hover:bg-primary/90',
  secondary: 'bg-secondary text-white hover:bg-secondary/90',
  danger: 'bg-red-600 text-white hover:bg-red-700',
};

const sizeClassNames = {
  sm: 'text-sm px-3 py-1',
  md: 'text-base px-5 py-2',
  lg: 'text-lg px-6 py-3',
};

export const Button = ({
  text,
  theme = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  ...props
}: ButtonProps) => {
  const baseClasses =
    'rounded-md font-semibold transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';
  const themeClass = themeClassNames[theme];
  const sizeClass = sizeClassNames[size];

  return (
    <button
      type={type}
      aria-label={text}
      className={`${baseClasses} ${themeClass} ${sizeClass} ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

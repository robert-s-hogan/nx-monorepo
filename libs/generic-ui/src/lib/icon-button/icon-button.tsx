import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon: ReactNode;
  label: string;
  style?: React.CSSProperties;
  text?: string;
  theme?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'warning'
    | 'success'
    | 'info'
    | 'transparent';
  iconPosition?: 'left' | 'right';
}

const themeClassNames = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  tertiary: 'btn-tertiary',
  danger: 'btn-danger',
  warning: 'btn-warning',
  success: 'btn-success',
  info: 'btn-info',
  transparent: 'btn-transparent',
};

export const IconButton: React.FC<IconButtonProps> = ({
  className,
  icon,
  label,
  style,
  text,
  theme = 'primary',
  iconPosition = 'right',
  ...props
}) => {
  const classNames = `icon-button ${themeClassNames[theme] || 'btn-primary'} ${
    className || ''
  }`;
  return (
    <button {...props} aria-label={label} className={classNames} style={style}>
      {iconPosition === 'left' && icon}
      {text && (
        <span className={iconPosition === 'left' ? 'ml-2' : 'mr-2'}>
          {text}
        </span>
      )}
      {iconPosition === 'right' && icon}
    </button>
  );
};

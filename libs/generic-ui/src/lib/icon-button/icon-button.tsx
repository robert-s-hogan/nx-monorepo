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
  ...props
}) => {
  const classNames = `icon-button ${themeClassNames[theme] || 'btn-primary'} ${
    className || ''
  }`;
  return (
    <button {...props} aria-label={label} className={classNames} style={style}>
      {icon}
      {text && <span>{text}</span>}
    </button>
  );
};

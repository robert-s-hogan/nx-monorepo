import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon: ReactNode;
  label: string;
  style?: React.CSSProperties;
}

export const IconButton: React.FC<IconButtonProps> = ({
  className,
  icon,
  label,
  style,
  ...props
}) => {
  return (
    <button {...props} aria-label={label} className={className} style={style}>
      {icon}
    </button>
  );
};

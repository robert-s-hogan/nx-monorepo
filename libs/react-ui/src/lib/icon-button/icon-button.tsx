import React from 'react';
import iconButtonStyles from './icon-button.module.css';
import { IconButtonProps } from '@with-nx/types';
import { BUTTON_VARIANT_CLASSES } from '../button/button';

export const IconButton = ({
  icon,
  label,
  style,
  className = '',
  variant,
  iconPosition = 'right',
  children,
  disabled,
  type = 'button',
  ...props
}: IconButtonProps): JSX.Element => {
  const defaultClassName = variant
    ? `${iconButtonStyles['iconButton']} icon-button px-3 py-2 rounded font-medium ${BUTTON_VARIANT_CLASSES[variant]}`
    : `${iconButtonStyles['iconButton']} icon-button`;

  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      aria-label={label}
      className={className ? className : defaultClassName}
      style={style}
    >
      {iconPosition === 'left' && icon}
      {children}
      {iconPosition === 'right' && icon}
    </button>
  );
};

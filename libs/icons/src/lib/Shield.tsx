import React from 'react';
import IconWrapper from './IconWrapper';

const ShieldIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-shield ${props.className}`}
    >
      <path d="M12 2.04l8.94 3.245a1 1 0 0 1 .56.9V16.9a1 1 0 0 1-.56.9L12 21.96l-8.38-3.815a1 1 0 0 1-.56-.9V6.185a1 1 0 0 1 .56-.9L12 2.04m0-2.04L3.24 4.29a1 1 0 0 0-.56.9v9.63a1 1 0 0 0 .56.9L12 22.04l8.24-3.765a1 1 0 0 0 .56-.9V5.19a1 1 0 0 0-.56-.9L12 0.04z"></path>
    </svg>
  );
};

export const Shield = IconWrapper(ShieldIcon);

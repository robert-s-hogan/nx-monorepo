import React from 'react';
import IconWrapper from './IconWrapper';

const LogOutIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-log-out ${props.className}`}
    >
      <path d="M18 15l3-3-3-3m-4 6h-7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  );
};

export const LogOut = IconWrapper(LogOutIcon);

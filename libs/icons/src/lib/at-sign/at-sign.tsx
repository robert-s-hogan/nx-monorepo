import React from 'react';
import IconWrapper from './IconWrapper';

const AtSignIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-at-sign ${props.className}`}
    >
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4"></path>
      <line x1="16" y1="8" x2="16.01" y2="8"></line>
      <line x1="8" y1="8" x2="8.01" y2="8"></line>
      <line x1="8" y1="16" x2="8.01" y2="16"></line>
    </svg>
  );
};

export const AtSign = IconWrapper(AtSignIcon);

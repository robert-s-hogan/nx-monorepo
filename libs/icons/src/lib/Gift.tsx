import React from 'react';
import IconWrapper from './IconWrapper';

const GiftIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-gift ${props.className}`}
    >
      <polyline points="20 12 20 22 4 22 4 12"></polyline>
      <rect x="2" y="7" width="20" height="5"></rect>
      <line x1="12" y1="22" x2="12" y2="7"></line>
      <path d="M8 7V4a4 4 0 0 1 8 0v3"></path>
      <path d="M16 7a4 4 0 0 1-8 0"></path>
    </svg>
  );
};

export const Gift = IconWrapper(GiftIcon);

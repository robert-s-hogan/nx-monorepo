import React from 'react';
import IconWrapper from './IconWrapper';

const DollarSignIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-dollar-sign ${props.className}`}
    >
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <path d="M17 8c0 4.97-4.03 9-9 9s-9-4.03-9-9"></path>
      <path d="M7 12h10"></path>
    </svg>
  );
};

export const DollarSign = IconWrapper(DollarSignIcon);

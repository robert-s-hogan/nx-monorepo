import React from 'react';
import IconWrapper from './IconWrapper';

const ChevronDownIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-chevron-down ${props.className}`}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
};

export const ChevronDown = IconWrapper(ChevronDownIcon);

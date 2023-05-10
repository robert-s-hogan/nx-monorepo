import React from 'react';
import IconWrapper from './IconWrapper';

const RotateCcwIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-rotate-ccw ${props.className}`}
    >
      <polyline points="1 4 1 10 7 10"></polyline>
      <path d="M3.51,15a9,9,0,1,1,2.13-9.36L4,6"></path>
      <path d="M21.17,8.22A9,9,0,1,0,15,21h.34"></path>
    </svg>
  );
};

export const RotateCcw = IconWrapper(RotateCcwIcon);

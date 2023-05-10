import React from 'react';
import IconWrapper from './IconWrapper';

const CornerRightUpIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-corner-right-up ${props.className}`}
    >
      <polyline points="10 9 15 4 20 9"></polyline>
      <path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>
    </svg>
  );
};

export const CornerRightUp = IconWrapper(CornerRightUpIcon);

import React from 'react';
import IconWrapper from './IconWrapper';

const XOctagonIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-x-octagon ${props.className}`}
    >
      <polygon points="15.64 2.64 22 9 15.64 15.36 9 22 2.64 15.36 2.64 9 9 2.64 15.36 9 22 15.36 15.64 22 9 15.64 2.64"></polygon>
      <line x1="15" y1="9" x2="9" y2="15"></line>
      <line x1="9" y1="9" x2="15" y2="15"></line>
    </svg>
  );
};

export const XOctagon = IconWrapper(XOctagonIcon);

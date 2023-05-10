import React from 'react';
import IconWrapper from './IconWrapper';

const UnderlineIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-underline ${props.className}`}
    >
      <path d="M12 6v13"></path>
      <path d="M4 20h16"></path>
      <path d="M4 4h16"></path>
    </svg>
  );
};

export const Underline = IconWrapper(UnderlineIcon);

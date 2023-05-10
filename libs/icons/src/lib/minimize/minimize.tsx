import React from 'react';
import IconWrapper from './IconWrapper';

const MinimizeIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-minimize ${props.className}`}
    >
      <path d="M4 14h16"></path>
    </svg>
  );
};

export const Minimize = IconWrapper(MinimizeIcon);

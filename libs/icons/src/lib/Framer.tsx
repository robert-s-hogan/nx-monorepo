import React from 'react';
import IconWrapper from './IconWrapper';

const FramerIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-framer ${props.className}`}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <path d="M11.5 12.5h1v-1h-1v1zm-4-4h1v-1h-1v1zm2 0h1v-1h-1v1zm4 0h1v-1h-1v1zm-2 2h1v-1h-1v1zm-4 4h1v-1h-1v1zm2 0h1v-1h-1v1zm4 0h1v-1h-1v1z"></path>
    </svg>
  );
};

export const Framer = IconWrapper(FramerIcon);

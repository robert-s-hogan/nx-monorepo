import React from 'react';
import IconWrapper from './IconWrapper';

const Navigation2Icon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-navigation-2 ${props.className}`}
    >
      <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
    </svg>
  );
};

export const Navigation2 = IconWrapper(Navigation2Icon);

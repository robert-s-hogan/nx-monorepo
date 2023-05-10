import React from 'react';
import IconWrapper from './IconWrapper';

const BoxIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-box ${props.className}`}
    >
      <path d="M20 8v8l-3.5 2l-3.5-2v-8l3.5-2l3.5 2z"></path>
      <path d="M12 4l8 4v8l-8 4l-8-4v-8l8-4z"></path>
    </svg>
  );
};

export const Box = IconWrapper(BoxIcon);

import React from 'react';
import IconWrapper from './IconWrapper';

const EyeIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-eye ${props.className}`}
    >
      <path d="M22.71 11.29a10 10 0 0 0-11.42-1.8A10.07 10.07 0 0 0 7.86 12a10 10 0 0 0 13.86 1.49l-2.32 2.33a1 1 0 1 0 1.41 1.41l3.31-3.31a1 1 0 0 0 0-1.41l-3.32-3.31a1 1 0 0 0-1.4 1.41l2.32 2.33z"></path>
      <path d="M9.23 12a3 3 0 1 1 5.54 0 3 3 0 0 1-5.54 0z"></path>
    </svg>
  );
};

export const Eye = IconWrapper(EyeIcon);

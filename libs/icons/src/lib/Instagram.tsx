import React from 'react';
import IconWrapper from './IconWrapper';

const InstagramIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-instagram ${props.className}`}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M17.5 6.5h-11a4 4 0 0 0-4 4v5.96a4 4 0 0 0 4 4h11a4 4 0 0 0 4-4v-5.96a4 4 0 0 0-4-4zm-1 9.96a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
    </svg>
  );
};

export const Instagram = IconWrapper(InstagramIcon);

import React from 'react';
import IconWrapper from './IconWrapper';

const LinkTwoIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-link-two ${props.className}`}
    >
      <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  );
};

export const LinkTwo = IconWrapper(LinkTwoIcon);

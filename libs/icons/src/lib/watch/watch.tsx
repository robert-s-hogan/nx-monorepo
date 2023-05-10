import React from 'react';
import IconWrapper from './IconWrapper';

const WatchIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-watch ${props.className}`}
      {...props}
    >
      <circle cx="12" cy="12" r="7" />
      <polyline points="12 9 12 12 15 13" />
    </svg>
  );
};

export const Watch = IconWrapper(WatchIcon);

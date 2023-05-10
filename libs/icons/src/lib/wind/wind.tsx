import React from 'react';
import IconWrapper from './IconWrapper';

const WindIcon: React.FC = (props) => {
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
      className={`feather feather-wind ${props.className}`}
      {...props}
    >
      <path d="M5 12H2" />
      <path d="M22 12h-5" />
      <path d="M8.6 19.4L4 23.4" />
      <path d="M3 12h5" />
      <path d="M19 12h2.5" />
      <path d="M15.4 19.4l4.6 4" />
      <path d="M19 12h-5" />
    </svg>
  );
};

export const Wind = IconWrapper(WindIcon);

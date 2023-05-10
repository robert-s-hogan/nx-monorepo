import React from 'react';
import IconWrapper from './IconWrapper';

const UmbrellaIcon: React.FC = (props) => {
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
      className={`feather feather-umbrella ${props.className}`}
      {...props}
    >
      <path d="M12 2v11m0 0V22M8 16l4-4 4 4"></path>
    </svg>
  );
};

export const Umbrella = IconWrapper(UmbrellaIcon);

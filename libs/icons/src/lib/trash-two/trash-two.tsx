import React from 'react';
import IconWrapper from './IconWrapper';

const TrashTwoIcon: React.FC = (props) => {
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
      className={`feather feather-trash-2 ${props.className}`}
      {...props}
    >
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M16 10a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6"></path>
      <line x1="10" y1="11" x2="10" y2="17"></line>
      <line x1="14" y1="11" x2="14" y2="17"></line>
    </svg>
  );
};

export const TrashTwo = IconWrapper(TrashTwoIcon);

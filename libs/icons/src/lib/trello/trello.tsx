import React from 'react';
import IconWrapper from './IconWrapper';

const TrelloIcon: React.FC = (props) => {
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
      className={`feather feather-trello ${props.className}`}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <rect x="7" y="7" width="6" height="9"></rect>
      <rect x="15" y="7" width="6" height="5"></rect>
    </svg>
  );
};

export const Trello = IconWrapper(TrelloIcon);

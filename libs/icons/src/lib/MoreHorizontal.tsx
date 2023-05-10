import React from 'react';
import IconWrapper from './IconWrapper';

const MoreHorizontalIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-more-horizontal ${props.className}`}
    >
      <circle cx="12" cy="12" r="1.5"></circle>
      <circle cx="19.5" cy="12" r="1.5"></circle>
      <circle cx="4.5" cy="12" r="1.5"></circle>
    </svg>
  );
};

export const MoreHorizontal = IconWrapper(MoreHorizontalIcon);

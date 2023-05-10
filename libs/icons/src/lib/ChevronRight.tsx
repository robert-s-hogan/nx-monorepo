import React from 'react';
import IconWrapper from './IconWrapper';

const ChevronRightIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-chevron-right ${props.className}`}
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
};

export const ChevronRight = IconWrapper(ChevronRightIcon);

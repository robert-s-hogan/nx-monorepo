import React from 'react';
import IconWrapper from './IconWrapper';

const ChevronsRightIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-chevrons-right ${props.className}`}
    >
      <polyline points="13 17 18 12 13 7"></polyline>
      <polyline points="6 17 11 12 6 7"></polyline>
    </svg>
  );
};

export const ChevronsRight = IconWrapper(ChevronsRightIcon);

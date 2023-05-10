// libs/icons/src/lib/ArrowUp.tsx
import React from 'react';
import IconWrapper from './IconWrapper';

type ArrowUpIconProps = {
  className?: string;
};

const ArrowUpIcon: React.FC<ArrowUpIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-arrow-up ${props.className}`}
    >
      <line x1="12" y1="19" x2="12" y2="5"></line>
      <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
  );
};

export const ArrowUp = IconWrapper(ArrowUpIcon);

// libs/icons/src/lib/ArrowUpRight.tsx
import React from 'react';
import IconWrapper from './IconWrapper';

type ArrowUpRightIconProps = {
  className?: string;
};

const ArrowUpRightIcon: React.FC<ArrowUpRightIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-arrow-up-right ${props.className}`}
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );
};

export const ArrowUpRight = IconWrapper(ArrowUpRightIcon);

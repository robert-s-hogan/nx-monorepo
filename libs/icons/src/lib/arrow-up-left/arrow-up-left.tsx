// libs/icons/src/lib/ArrowUpLeft.tsx
import React from 'react';
import IconWrapper from './IconWrapper';

type ArrowUpLeftIconProps = {
  className?: string;
};

const ArrowUpLeftIcon: React.FC<ArrowUpLeftIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-arrow-up-left ${props.className}`}
    >
      <line x1="17" y1="17" x2="7" y2="7"></line>
      <polyline points="7 17 7 7 17 7"></polyline>
    </svg>
  );
};

export const ArrowUpLeft = IconWrapper(ArrowUpLeftIcon);

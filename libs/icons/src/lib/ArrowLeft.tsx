// libs/icons/src/lib/ArrowLeft.tsx
import React from 'react';
import IconWrapper from './IconWrapper';

type ArrowLeftIconProps = {
  className?: string;
};

const ArrowLeftIcon: React.FC<ArrowLeftIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-arrow-left ${props.className}`}
    >
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  );
};

export const ArrowLeft = IconWrapper(ArrowLeftIcon);

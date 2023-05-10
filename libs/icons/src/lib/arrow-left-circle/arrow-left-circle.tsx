// libs/icons/src/lib/ArrowLeftCircle.tsx
import React from 'react';
import IconWrapper from './IconWrapper';

type ArrowLeftCircleIconProps = {
  className?: string;
};

const ArrowLeftCircleIcon: React.FC<ArrowLeftCircleIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-arrow-left-circle ${props.className}`}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 8 8 12 12 16"></polyline>
      <line x1="16" y1="12" x2="8" y2="12"></line>
    </svg>
  );
};

export const ArrowLeftCircle = IconWrapper(ArrowLeftCircleIcon);

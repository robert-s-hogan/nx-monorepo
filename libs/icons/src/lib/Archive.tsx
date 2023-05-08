// libs/icons/src/lib/ArrowDownRight.tsx
import React from 'react';
import IconWrapper from './IconWrapper';

type ArrowDownRightIconProps = {
  className?: string;
};

const ArchiveIcon: React.FC<ArrowDownRightIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-archive ${props.className}`}
    >
      <polyline points="21 8 21 21 3 21 3 8"></polyline>
      <rect x="1" y="3" width="22" height="5"></rect>
      <line x1="10" y1="12" x2="14" y2="12"></line>
    </svg>
  );
};

export const Archive = IconWrapper(ArchiveIcon);

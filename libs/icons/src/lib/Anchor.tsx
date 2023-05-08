// libs/icons/src/lib/Anchor.tsx
import React from 'react';
import IconWrapper from './IconWrapper';

type AnchorIconProps = {
  className?: string;
};

const AnchorIcon: React.FC<AnchorIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-anchor ${props.className}`}
    >
      <circle cx="12" cy="5" r="3"></circle>
      <line x1="12" y1="22" x2="12" y2="8"></line>
      <path d="M5 12H2a10 10 0 0020 0h-3"></path>
    </svg>
  );
};

export const Anchor = IconWrapper(AnchorIcon);

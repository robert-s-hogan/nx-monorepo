//libs/icons/src/lib/Aperture.tsx
import React from 'react';
import IconWrapper from './IconWrapper';

type ApertureIconProps = {
  className?: string;
};
const ApertureIcon: React.FC<ApertureIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-aperture ${props.className}`}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M14.31 8.31a4 4 0 00-5.66 0"></path>
      <line x1="9" y1="15" x2="9.01" y2="15"></line>
      <line x1="15" y1="15" x2="15.01" y2="15"></line>
    </svg>
  );
};

export const Aperture = IconWrapper(ApertureIcon);

import React from 'react';
import IconWrapper from './IconWrapper';

const VolumeIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-volume ${props.className}`}
      {...props}
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    </svg>
  );
};

export const Volume = IconWrapper(VolumeIcon);

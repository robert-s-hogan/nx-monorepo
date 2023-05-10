import React from 'react';
import IconWrapper from './IconWrapper';

const UploadIcon: React.FC = (props) => {
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
      className={`feather feather-upload ${props.className}`}
      {...props}
    >
      <path d="M12 20V4"></path>
      <polyline points="16 14 12 10 8 14"></polyline>
      <line x1="12" y1="10" x2="12" y2="14"></line>
    </svg>
  );
};

export const Upload = IconWrapper(UploadIcon);

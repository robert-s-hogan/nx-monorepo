import React from 'react';
import IconWrapper from './IconWrapper';

const UploadCloudIcon: React.FC = (props) => {
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
      className={`feather feather-upload-cloud ${props.className}`}
      {...props}
    >
      <polyline points="16 16 12 12 8 16"></polyline>
      <line x1="12" y1="12" x2="12" y2="21"></line>
      <path d="M20.39 12a8 8 0 0 0-15.14-2.34A4.5 4.5 0 0 0 2 15.5 4.49 4.49 0 0 0 6.5 20h11.74a4 4 0 0 0 2.15-.62 3 3 0 0 0 .61-4.09z"></path>
    </svg>
  );
};

export const UploadCloud = IconWrapper(UploadCloudIcon);

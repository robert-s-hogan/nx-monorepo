import React from 'react';
import IconWrapper from './IconWrapper';

const FileTextIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-file-text ${props.className}`}
    >
      <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
      <path d="M14 3L9 8H4v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-5"></path>
      <path d="M9 8V5"></path>
      <path d="M16 13H8"></path>
      <path d="M16 17H8"></path>
      <path d="M10 11H9v2"></path>
      <path d="M14 11h1v2"></path>
    </svg>
  );
};

export const FileText = IconWrapper(FileTextIcon);

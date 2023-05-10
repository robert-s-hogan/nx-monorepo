import React from 'react';
import IconWrapper from './IconWrapper';

const FolderMinusIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-folder-minus ${props.className}`}
    >
      <path d="M20 6H10l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM14 13H6"></path>
    </svg>
  );
};

export const FolderMinus = IconWrapper(FolderMinusIcon);

import React from 'react';
import IconWrapper from './IconWrapper';

const EditIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-edit ${props.className}`}
    >
      <path d="M19 4a1 1 0 0 1 1 1v11a1 1 0 0 1-.29.71l-6 6a1 1 0 0 1-.71.29H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14m0-2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h8v-6h6V5a3 3 0 0 0-3-3z"></path>
      <path d="M12 11v6"></path>
      <path d="M9 14h6"></path>
    </svg>
  );
};

export const Edit = IconWrapper(EditIcon);

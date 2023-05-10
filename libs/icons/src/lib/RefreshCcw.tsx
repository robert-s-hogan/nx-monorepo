import React from 'react';
import IconWrapper from './IconWrapper';

const RefreshCcwIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-refresh-ccw ${props.className}`}
    >
      <polyline points="1 4 1 10 7 10"></polyline>
      <polyline points="23 20 23 14 17 14"></polyline>
      <path d="M3.51,15A9,9,0,1,1,9,3"></path>
      <path d="M22.49,9A9,9,0,1,0,16,21"></path>
    </svg>
  );
};

export const RefreshCcw = IconWrapper(RefreshCcwIcon);

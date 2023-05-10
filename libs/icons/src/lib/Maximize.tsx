import React from 'react';
import IconWrapper from './IconWrapper';

const MaximizeIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-maximize ${props.className}`}
    >
      <path d="M3 3h18v18H3V3zm9 9v4h4v-4h3L12 6l-6 6h3z"></path>
    </svg>
  );
};

export const Maximize = IconWrapper(MaximizeIcon);

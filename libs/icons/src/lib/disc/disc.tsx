import React from 'react';
import IconWrapper from './IconWrapper';

const DiscIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-disc ${props.className}`}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
};

export const Disc = IconWrapper(DiscIcon);

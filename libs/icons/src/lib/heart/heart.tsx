import React from 'react';
import IconWrapper from './IconWrapper';

const HeartIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-heart ${props.className}`}
    >
      <path d="M12 21.35l-1.45-1.32C4.53 14.9 2 12.29 2 8.94 2 6.84 3.34 5 5.99 5c1.47 0 2.85.73 3.74 1.94C11.16 6.73 12.54 6 14.01 6c2.65 0 3.99 1.84 3.99 3.94 0 3.35-2.53 5.96-8.55 11.09L12 21.35z"></path>
    </svg>
  );
};

export const Heart = IconWrapper(HeartIcon);

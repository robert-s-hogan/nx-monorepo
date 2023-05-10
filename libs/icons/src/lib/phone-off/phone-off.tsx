import React from 'react';
import IconWrapper from './IconWrapper';

const PhoneOffIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-phone-off ${props.className}`}
    >
      <path d="M23 1L1 23"></path>
      <path d="M1 1l22 22"></path>
      <path d="M16.5 9.4l-1.4 1.4"></path>
      <path d="M17 15c-.1-1.3-.5-2.6-1.2-3.7"></path>
      <path d="M9.2 5H12v2.8"></path>
      <path d="M12 7l1.4-1.4"></path>
      <path d="M13 9.5c-.6 1.6-1.6 3-2.8 4.1"></path>
    </svg>
  );
};

export const PhoneOff = IconWrapper(PhoneOffIcon);

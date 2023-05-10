import React from 'react';
import IconWrapper from './IconWrapper';

const TwitchIcon: React.FC = (props) => {
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
      className={`feather feather-twitch ${props.className}`}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M17.002 9.171L14.001 6.17M10.929 9.171L8.002 6.171"></path>
    </svg>
  );
};

export const Twitch = IconWrapper(TwitchIcon);

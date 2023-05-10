import React from 'react';
import IconWrapper from './IconWrapper';

const YoutubeIcon: React.FC = (props) => {
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
      className={`feather feather-youtube ${props.className}`}
      {...props}
    >
      <path d="M21.98 7.974a3 3 0 00-2.12-2.12c-1.17-.34-5.89-.34-5.89-.34s-4.72 0-5.89.34a3 3 0 00-2.12 2.12C6.02 9.144 6 12 6 12s.02 2.856.11 4.026a3 3 0 002.12 2.12c1.17.34 5.89.34 5.89.34s4.72 0 5.89-.34a3 3 0 002.12-2.12c.09-1.17.11-4.026.11-4.026s-.02-2.856-.11-4.026z"></path>
      <path d="M9.75 15.251v-6.502l5.502 3.25-5.502 3.252z"></path>
    </svg>
  );
};

export const Youtube = IconWrapper(YoutubeIcon);

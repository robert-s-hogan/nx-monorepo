import React from 'react';
import IconWrapper from './IconWrapper';

const VideoOffIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-video-off ${props.className}`}
    >
      <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
  );
};

export const VideoOff = IconWrapper(VideoOffIcon);

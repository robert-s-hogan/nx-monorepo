import React from 'react';
import IconWrapper from './IconWrapper';

const VoicemailIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-voicemail ${props.className}`}
    >
      <circle cx="5.5" cy="11.5" r="4.5"></circle>
      <circle cx="18.5" cy="11.5" r="4.5"></circle>
      <line x1="5.5" y1="16" x2="18.5" y2="16"></line>
    </svg>
  );
};

export const Voicemail = IconWrapper(VoicemailIcon);

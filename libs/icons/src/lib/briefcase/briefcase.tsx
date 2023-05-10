import React from 'react';
import IconWrapper from './IconWrapper';

const BriefcaseIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-briefcase ${props.className}`}
    >
      <rect x="2" y="7" width="20" height="14" rx="2"></rect>
      <path d="M16 3v4a1 1 0 0 0 1 1h2"></path>
      <path d="M7 3v4a1 1 0 0 1-1 1H4"></path>
    </svg>
  );
};

export const Briefcase = IconWrapper(BriefcaseIcon);

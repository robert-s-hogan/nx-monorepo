import React from 'react';
import IconWrapper from './IconWrapper';

const GitCommitIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-git-commit ${props.className}`}
    >
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="1.05" y1="12" x2="7" y2="12"></line>
      <line x1="17.01" y1="12" x2="22.96" y2="12"></line>
    </svg>
  );
};

export const GitCommit = IconWrapper(GitCommitIcon);

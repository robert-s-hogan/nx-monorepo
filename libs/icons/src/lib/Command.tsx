import React from 'react';
import IconWrapper from './IconWrapper';

const CommandIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-command ${props.className}`}
    >
      <path d="M4 15h16v-2H4v2zM4 19h16v-2H4v2zM4 11h16v-2H4v2z"></path>
      <path d="M4 5h16v2H4z"></path>
    </svg>
  );
};

export const Command = IconWrapper(CommandIcon);

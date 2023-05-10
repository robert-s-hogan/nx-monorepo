import React from 'react';
import IconWrapper from './IconWrapper';

const UserIcon: React.FC = (props) => {
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
      className={`feather feather-user ${props.className}`}
      {...props}
    >
      <path d="M12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2Z"></path>
      <path d="M19.8806 20.4963C18.5729 18.9013 15.9293 17.5 12 17.5C8.07071 17.5 5.42708 18.9013 4.1194 20.4963C3.51705 21.1974 3 22.4115 3 23H21C21 22.4115 20.4829 21.1974 19.8806 20.4963Z"></path>
    </svg>
  );
};

export const User = IconWrapper(UserIcon);

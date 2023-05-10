import React from 'react';
import IconWrapper from './IconWrapper';

const UsersIcon: React.FC = (props) => {
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
      className={`feather feather-users ${props.className}`}
      {...props}
    >
      <path d="M17.58 15.58C16.21 14.62 14.61 14 12 14C9.39 14 7.79 14.62 6.42 15.58M12 14C9.79 14 7.68 14.47 6 15.43M12 14C14.12 14 15.72 14.67 17.02 15.73M2 20V18C2 16.9391 2.42143 15.9217 3.17157 16.1716C3.44409 16.3033 3.72328 16.3769 4 16.39V4C4 2.93913 4.42143 1.92172 5.17157 2.17157C5.44409 2.3033 5.72328 2.37691 6 2.39H18C18.2767 2.37691 18.5559 2.3033 18.8284 2.17157C19.5786 1.92172 20 2.93913 20 4V16.39C20.2767 16.3769 20.5559 16.3033 20.8284 16.1716C21.5786 15.9217 22 16.9391 22 18V20"></path>
    </svg>
  );
};

export const Users = IconWrapper(UsersIcon);

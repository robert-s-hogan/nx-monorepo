import React from 'react';
import IconWrapper from './IconWrapper';

const KeyIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-key ${props.className}`}
    >
      <path d="M4 8c0-2.21 1.79-4 4-4s4 1.79 4 4v3h1c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2H8a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2h1V8zm6 0v3h2V8c0-1.1-.9-2-2-2s-2 .9-2 2zm8.5 8.5c0-1.38-.56-2.63-1.46-3.54l-1.41 1.41c.52.52.87 1.21.87 2.03s-.35 1.51-.87 2.03l1.41 1.41c.9-.91 1.46-2.16 1.46-3.54z"></path>
      <path d="M0 0h24v24H0z" fill="none"></path>
    </svg>
  );
};

export const Key = IconWrapper(KeyIcon);

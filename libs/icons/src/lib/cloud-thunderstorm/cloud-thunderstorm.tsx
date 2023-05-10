import React from 'react';
import IconWrapper from './IconWrapper';

const CloudThunderstormIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-cloud-thunderstorm ${props.className}`}
    >
      <path d="M12 19v-2"></path>
      <path d="M8 17l-4 4"></path>
      <path d="M16 17l4 4"></path>
      <path d="M12 3v2"></path>
      <path d="M12 7v2"></path>
      <path d="M12 11v2"></path>
      <path d="M6 15h2"></path>
      <path d="M18 15h2"></path>
      <path d="M4 9h2"></path>
      <path d="M18 9h2"></path>
      <path d="M7 21a5 5 0 0 0 9.9-1.2"></path>
    </svg>
  );
};

export const CloudThunderstorm = IconWrapper(CloudThunderstormIcon);

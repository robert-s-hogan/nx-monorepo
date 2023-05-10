import React from 'react';
import IconWrapper from './IconWrapper';

const HexagonIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-hexagon ${props.className}`}
    >
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"></path>
    </svg>
  );
};

export const Hexagon = IconWrapper(HexagonIcon);

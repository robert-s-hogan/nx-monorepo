//libs/icons/src/lib/AlertOctagon.tsx
import React from 'react';
import IconWrapper from './IconWrapper';

type AlertOctagonIconProps = {
  className?: string;
};

const AlertOctagonIcon: React.FC<AlertOctagonIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-alert-octagon ${props.className}`}
    >
      <path d="M17.66 3.34L20 5.68V18.5a2.5 2.5 0 01-2.5 2.5H5.5a2.5 2.5 0 01-2.5-2.5V5.5a2.5 2.5 0 012.5-2.5H16.32a2.5 2.5 0 011.34.34zM12 8v4M12 16h.01"></path>
    </svg>
  );
};

export const AlertOctagon = IconWrapper(AlertOctagonIcon);

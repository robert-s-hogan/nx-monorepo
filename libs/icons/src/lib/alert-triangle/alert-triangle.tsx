//libs/icons/src/lib/AlertTriangle.tsx
import React from 'react';
import IconWrapper from './IconWrapper';

type AlertTriangleIconProps = {
  className?: string;
};

const AlertTriangleIcon: React.FC<AlertTriangleIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-alert-triangle ${props.className}`}
    >
      <path d="M12 1l10 17H2L12 1z"></path>
      <path d="M12 5v8M12 17h.01"></path>
    </svg>
  );
};

export const AlertTriangle = IconWrapper(AlertTriangleIcon);

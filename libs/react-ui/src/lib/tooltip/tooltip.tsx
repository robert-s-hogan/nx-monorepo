import React, { useState } from 'react';
import { TooltipProps } from '@with-nx/types';

export const Tooltip = ({
  icon,
  tooltipText,
  iconClassName = '',
  iconStyle = {},
  className = '',
  style = {},
  bgClassName = '',
  location = 'bottom',
}: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const locationClasses = {
    top: 'mt-4',
    right: 'ml-4',
    left: 'mr-4',
    bottom: 'mb-4',
  };

  return (
    <span
      className={`cursor-pointer px-2 ${locationClasses[location]} ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={style}
    >
      <span className={`tooltip-icon ${iconClassName}`} style={iconStyle}>
        {icon}
      </span>
      {showTooltip && (
        <span className={`tooltip-text px-2 mt-4 ${bgClassName}`}>
          {tooltipText}
        </span>
      )}
    </span>
  );
};

export default Tooltip;

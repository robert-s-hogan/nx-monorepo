'use client';

import React, { useState } from 'react';
import tooltipStyles from './tooltip.module.css';
import { TooltipProps } from '@with-nx/types';

export const Tooltip = ({
  icon,
  tooltipText,
  iconClassName,
  iconStyle,
  className,
  style,
  bgClassName,
  location,
}: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const getLocationClass = (location: string | undefined) => {
    switch (location) {
      case 'top':
        return tooltipStyles['tooltipTop'];
      case 'right':
        return tooltipStyles['tooltipRight'];
      case 'left':
        return tooltipStyles['tooltipLeft'];
      case 'bottom':
      default:
        return tooltipStyles['tooltipBottom'];
    }
  };
  return (
    <span
      className={`tooltip ${tooltipStyles['tooltip']}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span
        className={`tooltip-icon ${tooltipStyles['icon']} ${
          iconClassName ? iconClassName : ''
        }`}
        style={iconStyle}
      >
        {icon}
      </span>
      {showTooltip && (
        <span
          className={`tooltip-text ${tooltipStyles['tooltipText']} ${
            className ? className : ''
          } ${bgClassName ? bgClassName : ''}`}
          style={style}
        >
          {tooltipText}
        </span>
      )}
    </span>
  );
};

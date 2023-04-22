import React, { useState } from 'react';
import tooltipStyles from './tooltip.module.css';

// Rest of the imports and interface definition
export interface TooltipProps {
  icon: React.ReactNode;
  tooltipText: string;
  iconClassName?: string;
  iconStyle?: React.CSSProperties;
  className?: string;
  style?: React.CSSProperties;
  bgClassName?: string;
  location?: 'top' | 'right' | 'bottom' | 'left';
}
export const Tooltip: React.FC<TooltipProps> = ({
  icon,
  tooltipText,
  iconClassName,
  iconStyle,
  className,
  style,
  bgClassName,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const getLocationClass = (location: string | undefined) => {
    switch (location) {
      case 'top':
        return tooltipStyles.tooltipTop;
      case 'right':
        return tooltipStyles.tooltipRight;
      case 'left':
        return tooltipStyles.tooltipLeft;
      case 'bottom':
      default:
        return tooltipStyles.tooltipBottom;
    }
  };
  return (
    <span
      className={`tooltip ${tooltipStyles.tooltip}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span
        className={`tooltip-icon ${tooltipStyles.icon} ${
          iconClassName ? iconClassName : ''
        }`}
        style={iconStyle}
      >
        {icon}
      </span>
      {showTooltip && (
        <span
          className={`tooltip-text ${tooltipStyles.tooltipText} ${
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

export default Tooltip;

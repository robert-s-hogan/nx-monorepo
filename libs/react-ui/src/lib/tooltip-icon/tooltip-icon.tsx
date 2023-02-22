import tooltipIconStyles from './tooltip-icon.module.css';
import TooltipText, { TooltipTextProps } from '../tooltip-text/tooltip-text';

/* eslint-disable-next-line */
export interface TooltipIconProps {
  icon: React.ReactNode;
  tooltipText: string;
  iconClassName?: string;
  iconStyle?: React.CSSProperties;
  textProps?: TooltipTextProps;
  className?: string;
  style?: React.CSSProperties;
}

export function TooltipIcon({
  icon,
  tooltipText,
  iconClassName,
  iconStyle,
  textProps,
  className,
  style,
}: TooltipIconProps) {
  return (
    <span
      className={`${tooltipIconStyles.tooltopIcon} tooltip-icon ${
        className ? className : ''
      }`}
      style={style}
    >
      <span className={iconClassName} style={iconStyle}>
        {icon}
      </span>
      <TooltipText {...textProps}>{tooltipText}</TooltipText>
    </span>
  );
}

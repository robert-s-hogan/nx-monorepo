/* eslint-disable-next-line */
export interface TooltipTextProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function TooltipText(props: TooltipTextProps) {
  const { children, className, style } = props;

  return (
    <span
      className={`tooltip-text ${className ? className : ''}`}
      style={style}
    >
      {children}
    </span>
  );
}

export default TooltipText;

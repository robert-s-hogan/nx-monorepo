import reactUIBoxStyles from './box.module.css';

/* eslint-disable-next-line */
export interface BoxProps {
  id?: string;
  children?: React.ReactNode;
  className?: string;
  role?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;
}

export function Box({
  id,
  children,
  className,
  role,
  onClick,
  style,
}: BoxProps) {
  return (
    <div
      className={`box ${reactUIBoxStyles.box} ${className}`}
      id={id}
      role={role}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
}

export default Box;

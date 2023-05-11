import reactUIBoxStyles from './box.module.css';
import { BoxProps } from '@with-nx/types';

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

import reactUIBoxStyles from './box.module.css';

/* eslint-disable-next-line */
export interface BoxProps {
  id?: string;
  children?: React.ReactNode;
  className?: string;
  role?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export function Box({ id, children, className, role, onClick }: BoxProps) {
  return (
    <div
      className={`${reactUIBoxStyles.box} ${className}`}
      id={id}
      role={role}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Box;

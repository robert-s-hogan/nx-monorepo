import reactUIGridStyles from './grid.module.css';

/* eslint-disable-next-line */
export interface GridProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  role?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export function Grid({ id, children, className, role, onClick }: GridProps) {
  return (
    <div
      className={`${reactUIGridStyles.grid} ${className}`}
      id={id}
      role={role}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Grid;

import { GridProps } from '@with-nx/types';
import reactUIGridStyles from './grid.module.css';

export const Grid: React.FC<GridProps> = ({
  children,
  className,
  id,
  ariaLabel,
}: GridProps) => {
  return (
    <div
      className={`grid ${reactUIGridStyles['grid']} ${className}`}
      id={id}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
};

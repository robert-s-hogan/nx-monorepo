import { GridProps } from '@with-nx/types';
import reactUIGridStyles from './grid.module.css';

export function Grid({ id, children, className, ariaLabel }: GridProps) {
  return (
    <div
      className={`grid ${reactUIGridStyles.grid} ${className}`}
      id={id}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
}

export default Grid;

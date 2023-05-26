import { GridProps } from '@with-nx/types';

export function Grid({ id, children, className, ariaLabel }: GridProps) {
  const defaultClasses = 'grid gap-4 items-center';

  return (
    <div
      className={className ? className : defaultClasses}
      id={id}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
}

export default Grid;

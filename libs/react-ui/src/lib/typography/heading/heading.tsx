import { HeadingProps } from '@with-nx/types';
import Skeleton from '../skeleton/skeleton';

export const Heading = ({
  level,
  children,
  className = '',
  id,
  'aria-labelledby': ariaLabelledBy,
  tabIndex,
  isLoading,
  rows = 1,
  rowWidth = 100,
  height = 16,
  width = 'full',
}: HeadingProps & {
  isLoading?: boolean;
  rows?: number;
  rowWidth?: number;
  height?: number;
  width?: string | number;
}): JSX.Element => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  // Adding dynamic tailwind classes based on `level` prop
  const headingClasses = {
    1: 'text-4xl',
    2: 'text-3xl',
    3: 'text-2xl',
    4: 'text-xl',
    5: 'text-lg',
    6: 'text-base',
  };

  const baseClasses = `font-bold text-gray-800 w-${width} ${headingClasses[level]} ${className}`;

  return (
    <HeadingTag
      className={baseClasses}
      id={id}
      aria-level={level}
      aria-labelledby={ariaLabelledBy}
      tabIndex={tabIndex}
    >
      {isLoading ? (
        <Skeleton
          rows={rows}
          isLoading={isLoading}
          rowWidth={rowWidth}
          height={height}
          width={width}
        />
      ) : (
        children
      )}
    </HeadingTag>
  );
};

export default Heading;

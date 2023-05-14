import { HeadingProps } from '@with-nx/types';
import Skeleton from '../skeleton/skeleton';

export const Heading = ({
  level,
  children,
  className,
  id,
  style,
  'aria-labelledby': ariaLabelledBy,
  tabIndex,
  isLoading,
  rows = 1,
  rowWidth = 100,
  height = 16,
  width = '100%',
}: HeadingProps & {
  isLoading?: boolean;
  rows?: number;
  rowWidth?: number;
  height?: number;
  width?: string | number;
}): JSX.Element => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  const combinedStyles = {
    width: width,
    ...style,
  };

  return (
    <HeadingTag
      className={className}
      id={id}
      style={combinedStyles}
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

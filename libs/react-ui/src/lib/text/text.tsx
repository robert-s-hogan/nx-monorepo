import Skeleton from '../skeleton/skeleton';
import { TextProps } from '@with-nx/types';

export const Text = ({
  children,
  key,
  className,
  id,
  style,
  onClick,
  isLoading,
  rows = 1,
  rowWidth = 100,
  height = 16,
  width = 100,
}: TextProps) => {
  return (
    <div
      className={`text ${className}`}
      id={id}
      style={style}
      onClick={onClick}
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
    </div>
  );
};

export default Text;

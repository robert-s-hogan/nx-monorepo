import SkeletonText from './skeleton-text';
import { SkeletonProps } from '@with-nx/types';

export const Skeleton = ({
  key,
  width = '100%',
  height = '100%',
  borderRadius = 0,
  isLoading = false,
  rows = 1,
  rowWidth = '100%',
  className = '',
}: SkeletonProps) => {
  const styles = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    borderRadius:
      typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
  };

  const classNames = `skeleton bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-200% ${className}`;

  return (
    <span
      className={isLoading ? classNames : ''}
      style={isLoading ? styles : {}}
      key={key}
    >
      {isLoading && (
        <>
          {rows > 1 ? (
            <SkeletonText rows={rows} width={rowWidth} height={height} />
          ) : (
            <div className={classNames} style={styles}></div>
          )}
        </>
      )}
    </span>
  );
};

export default Skeleton;

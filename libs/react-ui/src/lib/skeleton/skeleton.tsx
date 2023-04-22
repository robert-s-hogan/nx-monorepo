import React from 'react';
import skeletonStyles from './skeleton.module.css';
import SkeletonText from './skeleton-text';

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  isLoading?: boolean;
  rows?: number;
  rowWidth?: string | number;
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '100%',
  borderRadius = 0,
  isLoading = false,
  rows = 1,
  rowWidth = '100%',
  className = '',
}) => {
  const styles = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    borderRadius:
      typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
  };

  const classNames = `skeleton ${skeletonStyles.skeleton} ${className}`;

  return (
    <span
      className={isLoading ? '' : classNames}
      style={isLoading ? {} : styles}
    >
      {isLoading && (
        <>
          {rows > 1 ? (
            <SkeletonText rows={rows} width={rowWidth} />
          ) : (
            <div className={classNames} style={styles}></div>
          )}
        </>
      )}
    </span>
  );
};

export default Skeleton;

// libs/react-ui/src/lib/skeleton/skeleton.tsx
import React from 'react';
import skeletonStyles from './skeleton.module.css';

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  isLoading?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '100%',
  isLoading = false,
}) => {
  const styles = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <>
      {isLoading && (
        <div
          className={`skeleton ${skeletonStyles.skeleton}`}
          style={styles}
        ></div>
      )}
    </>
  );
};

export default Skeleton;

// libs/react-ui/src/lib/skeleton/skeleton.tsx
import React from 'react';
import skeletonStyles from './skeleton.module.css';

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '100%',
}) => {
  const styles = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <div className={`skeleton ${skeletonStyles.skeleton}`} style={styles}></div>
  );
};

export default Skeleton;

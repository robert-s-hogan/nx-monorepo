import skeletonStyles from './skeleton.module.css';
import { SkeletonProps } from '@with-nx/types';

export const Skeleton = ({
  height = '100%',
  width = '100%',
  borderRadius = 0,
  isLoading = false,
  className = '',
}: SkeletonProps) => {
  if (!isLoading) {
    return null;
  }

  // Style object for custom dimensions and border-radius
  const customStyles = {
    height: typeof height === 'number' ? `${height}px` : height,
    width: typeof width === 'number' ? `${width}px` : width,
    borderRadius:
      typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
  };

  return (
    <div
      className={`${skeletonStyles['skeleton']} ${className}`}
      style={customStyles}
    />
  );
};

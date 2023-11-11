import skeletonStyles from './skeleton.module.css';
import { SkeletonProps } from '@with-nx/types';

export const Skeleton = ({
  key,
  height = '100%',
  width = '100%',
  borderRadius = 0,
  isLoading = false,
  className = '',
}: SkeletonProps) => {
  // Directly use the height and width provided via props
  const styles = {
    height: typeof height === 'number' ? `${height}px` : height,
    width: typeof width === 'number' ? `${width}px` : '40%',
    borderRadius:
      typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
  };

  return (
    <div
      className={
        isLoading ? `${skeletonStyles.skeleton} ${className}` : className
      }
      style={isLoading ? styles : {}}
      key={key}
    />
  );
};

export default Skeleton;

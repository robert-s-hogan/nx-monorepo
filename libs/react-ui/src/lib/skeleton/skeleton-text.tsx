import skeletonTextStyles from './skeleton.module.css';

interface SkeletonTextProps {
  rows?: number;
  height?: string | number;
  isLoading?: boolean;
  width?: string | number;
}

const SkeletonText = ({
  rows = 1,
  height,
  isLoading,
  width,
}: SkeletonTextProps) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div className={skeletonTextStyles.skeletonTextContainer}>
      {Array.from({ length: rows }, (_, index) => (
        <span
          key={index}
          className={`${skeletonTextStyles.skeletonText}`}
          style={{
            height:
              typeof height === 'number' ? `${height}px` : height || '20px',
          }}
        />
      ))}
    </div>
  );
};

export default SkeletonText;

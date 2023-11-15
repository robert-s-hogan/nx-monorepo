import skeletonTextStyles from './skeleton-text.module.css';

interface SkeletonTextProps {
  rows?: number;
  isLoading?: boolean;
  width?: string | number;
  className?: string;
  level?: number;
  height?: string | number;
}

export const SkeletonText = ({
  rows = 1,
  isLoading,
  width,
  className = '',
  level,
  height,
}: SkeletonTextProps) => {
  if (!isLoading) {
    return null;
  }

  const Tag = (level ? `h${level}` : 'p') as keyof JSX.IntrinsicElements;

  return (
    <div className={`${skeletonTextStyles.skeletonTextContainer} ${className}`}>
      {Array.from({ length: rows }, (_, index) => (
        <Tag
          key={index}
          className={`skeleton-text ${skeletonTextStyles.skeletonText}`}
          style={{
            width: typeof width === 'number' ? `${width}px` : width || '100%',
            minHeight:
              typeof height === 'number' ? `${height}px` : height || '1em',
          }}
        />
      ))}
    </div>
  );
};

export default SkeletonText;

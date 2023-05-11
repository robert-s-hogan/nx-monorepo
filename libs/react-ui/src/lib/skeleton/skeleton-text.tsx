import skeletonTextStyles from './skeleton.module.css';

interface SkeletonTextProps {
  rows?: number;
  key?: string | number;
  rowWidth?: string | number;
  width?: string | number;
  height?: string | number;
}

const SkeletonText = ({ rows, rowWidth, width, height }: SkeletonTextProps) => {
  return (
    <span
      className={`skeleton-text-container ${skeletonTextStyles.skeletonTextContainer}`}
    >
      {new Array(rows || 1).fill(null).map((_, index) => (
        <span
          key={`skeleton-text-${index}`}
          className={`skeleton-text ${skeletonTextStyles.skeletonText}`}
          style={{
            width: typeof rowWidth === 'number' ? `${rowWidth}px` : rowWidth,
            height: typeof height === 'number' ? `${height}px` : height,
          }}
        ></span>
      ))}
    </span>
  );
};

export default SkeletonText;

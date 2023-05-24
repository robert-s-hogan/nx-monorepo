import { SkeletonProps } from '@with-nx/types';

const SkeletonText = ({ rows, rowWidth, width, height }: SkeletonProps) => {
  return (
    <span className={`skeleton-text-container flex flex-col space-y-1`}>
      {new Array(rows || 1).fill(null).map((_, index) => (
        <span
          key={`skeleton-text-${index}`}
          className={`skeleton-text bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-200% animate-loading`}
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

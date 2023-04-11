import React from 'react';
import skeletonTextStyles from './skeleton-text.module.css';

interface SkeletonTextProps {
  rows?: number;
  key?: string | number;
}

const SkeletonText: React.FC<SkeletonTextProps> = ({ rows }) => {
  return (
    <React.Fragment>
      {new Array(rows || 1).fill(
        <div
          key={Math.random()}
          className={`skeleton-text ${skeletonTextStyles.textSkeleton}`}
        ></div>
      )}
    </React.Fragment>
  );
};

export default SkeletonText;

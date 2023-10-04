import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPlainDaggerIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'plain-dagger'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className: propClassName, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`game-icon ${combinedClassNames}`}
      {...otherProps}
    >
      <path
        fill="currentColor"
        d="M43.53 15.75c-15.73 0-28.31 12.583-28.31 28.313 0 14.086 10.092 25.644 23.5 27.906L42.687 68 68.81 41.906l2.626-2.625C69.188 25.86 57.63 15.75 43.53 15.75zm33.72 44.125l-17 17c15.885 39.37 43.45 66.684 78.75 87.406 8.167-8.585 16.65-16.898 25.438-24.936-22.488-35.103-51.535-62.294-87.188-79.47zM322.594 79.03l-51.25 4.314c-79.356 48.134-143.878 108.1-186.72 186.53l-4.31 51.47 44.155-18.656-2.94-34.094-.25-3.063 1.626-2.624c35.94-58.47 79.93-109.41 141.5-141.25l2.406-1.25 2.688.25 34.125 2.906 18.97-44.53zm-62.438 66.376c-10.008 5.886-19.5 12.338-28.562 19.313 46.688 47.93 87.208 108.588 114.72 166.5l11.248 23.717-23.718-11.28c-57.995-27.554-117.918-67.57-165.688-113.907-7.155 9.404-14.028 19.174-20.625 29.28 101.918 94.91 227.05 177.304 347.845 234.69-57.063-120.125-140.038-246.18-235.22-348.314zm-43.03 31.22c-13.37 11.703-25.72 24.58-37.282 38.436 39.36 38.452 88.085 72.83 136.687 98.844-26.054-48.633-60.754-97.847-99.405-137.28z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPlainDaggerIcon })
);

import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconEclipseSawIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'eclipse-saw'];
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
        d="M298.686 12.816c25.49 34.447 40.996 76.86 40.996 122.985 0 34.464-8.426 66.962-23.313 95.563-.652 1.252-1.313 2.5-1.99 3.737-7.566 13.934-16.807 27.053-27.62 39.03-.46.514-.918 1.03-1.383 1.538-.073.08-.148.156-.22.234-37.91 41.328-92.347 67.248-152.825 67.248-43.4 0-83.738-13.43-117.043-36.24v151.502c21.237 15.19 44.462 28.82 70.105 39.807-13.795-20.95-24.547-75.607-17.3-98.652 48.342 53.115 139.075 70.86 213.362 62.41-47.385-10.927-74.768-47.316-73.078-86.744 69.263 8.18 137.864 5.91 207.35-21.388-43.843 10.703-83.026-7.075-100.41-40.4 67.025-28.817 127.756-67.482 175.268-130.708-42.692 30.01-90.924 25.05-118.826-5.347 46.18-36.425 86.357-78.176 115.855-131.302-34.755 18.862-82.67 38.805-115.088 22.435 18.563-19.57 30.396-39.924 33.833-55.707H298.686zm19.01 92.575c-8.516 80.678-76.77 143.557-159.706 143.557-62.575 0-116.574-35.956-143.082-88.187v116.38c57.77 50.205 143.282 60.98 213.35 20.526C297.48 257.7 331.002 179.75 317.695 105.39z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconEclipseSawIcon })
);

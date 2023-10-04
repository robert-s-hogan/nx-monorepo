import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDreadnoughtIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'dreadnought'];
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
        d="M18 18v82.2c16.06 10.7 31.6 24.8 84.5 5.1 18.4 34.2 38.6 32 49.9 26.8 8.5 16.3 28 17.7 46.7 2.4h47.8c-8.8-8.1-21.9-21.5-23.2-31.5 8.3 16.9 39.2 23.4 55.5 31.5h51.2c22.3-14 2.9-29.6-5.9-39.69-15.1-17.33-41.5-20.08-66-19.66 10.7-16.39-1.6-27.48-11.3-35.12-11.6-9.19-27.2-12.7-44.2-3.51 2.6-7.48 1.8-13.49-.9-18.52zm181 133v64h-45.1l-29.2 73H80l39.9 39.9c-27.28 1.5-57.58 6.1-90.37 15.4l4.94 17.4c53.87-15.4 99.93-17.4 136.73-14.5 2.6.2 1.8.3 2.6.2 36.8 3.1 64.1 10.9 80.3 14.4 39 8.5 109.5 26.5 213.3-16.5l-6.8-16.6c-6.1 2.5-12.2 4.9-18.4 7.1-15.8-4.6-32.1-8.1-48.7-10.7L448 256h-72.6L358 215h-29v-64h-50v64h-30v-64zm18 18h14v46h-14zm80 0h14v46h-14zm-130.9 64H346l9.8 23H304l-16 32H144.1zm141.2 102.9c34.4 0 68.7 2.6 101.2 9.2-70.4 17.7-118.1 5.2-150.6-1.9-4.8-1-11.1-2.6-18.6-4.3 22.4-1.9 45.2-3 68-3zM172.7 375h-2.3c-33.3 1.1-92.58 16.3-92.58 16.3l4.36 17.4s60.62-14.8 88.72-15.7c19.7-.6 64.5 7.2 64.5 7.2l3.2-17.7s-40.8-7.8-65.9-7.5zm140.2 32c-28.8-.1-65.1 7.9-95.1 15.9-31 8.2-55.1 16.6-55.1 16.6l5.9 17s23.5-8.2 53.8-16.2c30.3-8 67.5-15.8 92.9-15.3 33 .6 63.9 9.7 93 18.9s56.3 18.7 82.5 18.7v-18c-21.7 0-47.7-8.6-77.1-17.9-29.3-9.2-62-19-98-19.7z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDreadnoughtIcon })
);

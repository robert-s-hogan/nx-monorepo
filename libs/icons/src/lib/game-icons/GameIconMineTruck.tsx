import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMineTruckIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'mine-truck'];
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
        d="M102.5 70.4c-.8 0-1.7.1-2.5.22-30.99 5.31-62.08 74.08-72.4 98.98h226.8l11.9-23.9c-12.4-20-35.3-50.36-58.3-49.08-15.1.8-44 33.98-44 33.98s-35.4-60.51-61.5-60.2zm195.1 53.2l-32 64h-79.7l-40.7 95c22 3.3 41.4 14.7 55 31h87.6c4.8-5.8 10.3-10.9 16.4-15.3l28.6-128.7h48.9l16.3-46zM21 187.6v80l13.57 3.5 35.8-83.5zm68.91 0l-37.77 88.1 25.56 6.7 40.6-94.8zm47.99 0L95.28 287l3.7 1c8.42-3.4 17.52-5.6 27.02-6.2l40.3-94.2zm209.3 0l-22.1 99.5c9.6-3.5 20.1-5.5 30.9-5.5 40.3 0 74.6 27.1 85.4 64H491v-80.5l-46.5-15.5-15.5-62h-34.7zm17.8 14h46l12.5 50h-71l10.8-43.2zm-233 98c-39.32 0-71 31.7-71 71s31.68 71 71 71c39.3 0 71-31.7 71-71s-31.7-71-71-71zm224 0c-39.3 0-71 31.7-71 71s31.7 71 71 71 71-31.7 71-71-31.7-71-71-71zm-320.62 32l-12.4 62h23.05c-1.97-7.3-3.03-15.1-3.03-23 0-14 3.25-27.2 9.04-39zm176.62 0c5.7 11.8 9 25 9 39 0 7.9-1.1 15.7-3 23h52c-1.9-7.3-3-15.1-3-23 0-14 3.3-27.2 9-39zm-80 7a32 32 0 0 1 32 32 32 32 0 0 1-32 32 32 32 0 0 1-32-32 32 32 0 0 1 32-32zm224 0a32 32 0 0 1 32 32 32 32 0 0 1-32 32 32 32 0 0 1-32-32 32 32 0 0 1 32-32zm88.7 25c.2 2.3.3 4.6.3 7 0 10.7-1.9 20.9-5.4 30.5l51.4-20.6v-16.9z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMineTruckIcon })
);

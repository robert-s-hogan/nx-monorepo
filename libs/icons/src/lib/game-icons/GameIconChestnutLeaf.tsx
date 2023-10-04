import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconChestnutLeafIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'chestnut-leaf'];
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
        d="M229.8 21.43s-5.9 14.34-15.6 19.23c-17.6 8.99-36.7 21.57-38.7 55.07-3.7 62.07 19 131.87 40.6 190.77-20.4-41.5-39.5-71.9-93-114.5-23.73-19.2-60.37-50.5-78.88-43.7-10.17 3.8-24.08-5-24.08-5 5.31 11.2 7.49 24 7.82 36.3 1.26 26.9 11.81 57.6 29.02 82.4 37.59 52.6 91.92 75 138.52 86-41.2-6.2-72.7-5-122.09 10.1-22.85 6.8-31.79 22.1-37.33 39.2-3.02 9.5-12.98 15.3-12.98 15.3 8.99 2.4 18.38 6.1 25.49 12.5 15.81 13.7 37.38 15.7 62.11 11.5 56.8-9.5 82.5-26.6 121.1-61.3 1.2 47.2-2.7 96.4-11.3 135.1l17.6 4c9-40.3 12.9-89.9 11.8-137.9 46 24.1 110.2 51.6 171.7 32.9 22.7-7.4 36.9-28.3 46.7-46.2 4.5-8.2 15.4-10.1 23.6-14.7 0 0-14.6-1.9-21.8-10.4-13.4-15.2-32.9-26-59.3-26.4-40.5-.8-71.2 7.9-98.3 19.7 31.4-21.9 65.9-52.1 107.1-86.5 35.7-36.2 35.2-48.8 34.1-75.8-.7-12.2-6.9-20.8-2.6-32.2 0 0-14.3 1.3-25.2 1.3-22.3 0-34.6-11.2-56.6 10-43.7 41.4-73 92-96.1 140.4 16.2-54.4 26.1-123.5 15.2-175.2-4.9-31.93-13.7-43.53-40.2-52.25-11.6-3.85-13.8-8.26-18.4-19.72z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconChestnutLeafIcon })
);

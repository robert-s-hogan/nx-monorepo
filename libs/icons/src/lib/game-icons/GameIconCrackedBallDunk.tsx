import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCrackedBallDunkIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'cracked-ball-dunk'];
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
        d="M195.938 20.438C96.6 21.47-5.517 164.667 29.813 458.938c7.368-370.195 187-461.348 252.875-248.782-.724.372-1.448.762-2.157 1.156l-80.78-58L248 246.188c-2.173 4.416-3.97 9.074-5.438 13.907L120.22 255.28l119.06 47.814c.304 2.26.674 4.534 1.126 6.812.383 1.928.837 3.83 1.313 5.72l-76.44 85.25L268.157 365c.916 1.003 1.864 1.974 2.813 2.938l-16.97 116 72.97-87.313c4.53.546 9.093.754 13.717.53l78.094 97.595-25.592-122.375c1.513-1.67 2.965-3.387 4.343-5.188l101.095-4.03-82.813-46.75c.43-7.072.143-14.343-.937-21.72l78.063-67.968-94.344 23.75c-2.162-3.464-4.484-6.8-6.97-9.97l30.938-91.063-66.937 61.532c-1.885-.926-3.785-1.803-5.72-2.595C328.46 84.762 264.238 21.238 198.282 20.437c-.78-.01-1.56-.008-2.343 0zM316 220.594c.584-.012 1.168-.005 1.75 0 21.907.178 43.736 12.245 59 31.47l-45.938 25.53-13.187-16.625-5.47-6.908-7.217 5.063-47.907 33.78c-2.07-38.124 20.407-68.303 53.72-71.967 1.74-.192 3.498-.31 5.25-.344zm70.906 47.22c3.957 7.708 6.95 16.112 8.72 25.03 1.7 8.574 2.16 16.875 1.562 24.72l-39.72-6.345-.593-.75-14.28-18.033 44.31-24.625zm-78.437 11.686l29.967 37.844-28.843 55.03c-22.418-10.077-41.54-31.73-49.156-59l48.03-33.874zm44.717 49.97l40.407 6.467c-7.628 23.216-26 39.61-50 42.25-5.258.58-10.54.418-15.78-.375l25.373-48.343z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCrackedBallDunkIcon })
);

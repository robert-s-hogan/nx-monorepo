import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFishingLureIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'fishing-lure'];
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
        d="M403.6 24.88c-15.7-.33-32.3 6.3-42.9 10.41l-56.9 30.87 54.1 12.34-4.8-20.03c32.6-18.93 57-17.6 68.8-11.06 6 3.33 8.8 7.64 9.5 11.89.6 4.26-.7 9.19-6.2 14.7L324.1 175.1 81.17 320.9C52.61 349.7 34.15 390 25 424.8c-4.62 17.5-6.88 33.7-7.1 45.8-.11 6.1.31 11.2 1.04 14.8.68 3.3 1.85 5.1 1.82 5.1-.1-.1 1.69 1.1 5.16 1.8 3.57.8 8.67 1.2 14.75 1.1 12.17-.2 28.29-2.5 45.81-7.1 33.92-8.9 73.02-26.7 101.52-53.9l-.1-.3c39.2-13.3 67.5-44 99.5-71.7-39.9 0-80.4.7-122.1-7.2 37.3-1.2 65.5-5.4 77.9-11.1l91.1-151.7L438 86.76c5.5-5.51 10.4-6.76 14.7-6.12 4.2.65 8.5 3.44 11.9 9.45 6.5 11.81 7.8 36.11-11.1 68.81l-20-4.9 12.3 54.2 34.6-63.8c7.8-17.5 10.3-44.3-.1-63.05-5.5-9.97-14.6-16.93-24.9-18.51-1.3-.2-2.7-.3-4-.32h-2c.1-1.98 0-3.96-.3-5.91-1.5-10.39-8.5-19.4-18.5-24.94-7.4-4.15-16.6-6.57-27-6.79zm-271 162.82c-28 35-41.37 70-46.84 109.3l76.04-45.6c-17.7-17.4-17.2-34.8-29.2-63.7zM88.7 370.9c5.63.1 11.01 2.3 15 6.3 8.4 8.4 8.4 22.1 0 30.5-8.44 8.5-22.14 8.5-30.58 0-8.41-8.4-8.41-22.1 0-30.5 4.13-4.1 9.75-6.4 15.58-6.3z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFishingLureIcon })
);

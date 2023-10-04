import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBambooFountainIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'bamboo-fountain'];
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
        d="M18 27.7v106c27.94 8.9 47.63 19.8 68.45 33.3-1.22-15.7.14-30.6 4.07-44.8 5.35-19.3 15.38-36.93 29.48-52.99C86.02 55.33 46.92 49.79 18 27.7zm119.5 48.97c-14.7 15.48-24.6 32.23-29.6 50.33-4.1 14.8-5.1 30.7-2.5 47.9 51.5 10.9 88.1 31.2 119.4 50.3-9.5-27.7-6.8-54.1 1.9-73.8 6-11.2 12.2-21 21.3-27.7-40.9-9.9-78.9-24.01-110.5-47.03zm152.9 65.93c10.5 9.8 16.9 27 16.9 45.6 0 29.6-16 53.7-35.8 53.7-13 0-25-10.6-31.3-27.6 1.3 4.4 2.9 8.9 4.9 13.4 10.5 23.5 27.2 31.3 49.2 35.6 19.2 3.8 41.8 3.7 63.9 7.5 5.5-37.1-4.3-67.1-21.1-89.9-12.7-17.3-29.7-30.2-46.7-38.3zm-13.2 134.9c11.6 76.3 7 130.2 6.1 209.1 11.3 5.9 18.9 2.7 26.7 0-3.2-28.5 3.1-56.9 5.7-85.4 3.2 28.2 10.1 55.3 5.7 85.4 33.3 9.6 63.4 5.5 64.1 0-1.9-73.7-18.6-124.5-17.2-195.2-6.7-1.6-14.1-3-20-3.8.1 13.3 0 26.5-4 40.4-6.1-13.5-6.9-27.6-7.5-41.7-9-.9-18.3-1.5-27.6-2.6 2.7 6.5 4.7 36.8 5.4 42.6 3.1 25.2-6.4 54.1-6.4 54.1-4.8-6.4-13.2-67.1-5.4-97.5-8.9-1.1-17.8-2.8-25.6-5.4zM388.7 310s-.5 27.8 5.3 40c2.8 5.8 13 12.6 18.6 8.6 6.7-4.8 1.9-17.6-2.4-24.6-5.6-9.1-21.5-24-21.5-24zm-50.6 37.6s12.1 37.4 13.9 56.9c1.5 16.7-2.2 50.2-2.2 50.2s-6.6-26.3-8.7-39.5c-3.6-22.7-3-67.6-3-67.6zm-66 80.6s-9 10.4-12.7 19.4c-2.8 6.9-4 18.6 1 21.8 4.6 2.9 11.2-5.6 12.8-11.2 3.5-11.8-1.1-30-1.1-30z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBambooFountainIcon })
);

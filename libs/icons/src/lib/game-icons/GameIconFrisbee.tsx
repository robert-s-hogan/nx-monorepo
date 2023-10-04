import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFrisbeeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'frisbee'];
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
        d="M385.5 30.38c-18.5.16-40.5 5.02-64.3 14.24C270.4 64.35 211.1 104 156.4 158.7c-54.8 54.7-94.46 114.1-114.12 164.9-9.89 25.4-14.7 48.6-14.28 67.9.43 19 5.8 33.8 16.05 44 10.26 10.3 24.96 15.6 44.06 16.1 19.19.4 42.39-4.4 67.89-14.3 50.8-19.7 110.1-59.4 164.8-114.1 54.7-54.7 94.4-114 114.1-164.9 9.9-25.4 14.7-48.6 14.3-67.79-.5-19.09-5.8-33.8-16.1-44.05-10.3-10.26-25-15.63-44-16.05-1.2-.03-2.4-.04-3.6-.03zm66.6 10.7c9.9 13.36 14.7 30.3 15.1 49.08.5 22.44-5 47.74-15.6 74.64-20.8 54-61.8 114.9-118 171.1-56.3 56.3-117.2 97.2-171.2 118.1-26.9 10.6-52.2 16-74.65 15.6-15.06-.3-28.93-3.5-40.72-9.8.8.9 1.62 1.8 2.47 2.6 25.95 26 72.3 29.4 128.3 10.7 56-18.6 120.3-59.2 178.2-117.2 57.9-57.9 98.5-122.1 117.1-178.1 18.8-56 15.3-102.35-10.7-128.3-3.1-3.14-6.6-5.94-10.3-8.42zM299.7 122.5c7.8 0 15.3 2.3 20.7 7.7 6.7 6.7 8.5 16.4 7.4 26.1-1 9.7-4.7 20.2-10.3 31.6-11.2 22.8-30.4 49-55.5 74.1-25.1 25.1-51.3 44.3-74.1 55.5-11.3 5.6-21.9 9.3-31.6 10.3-9.7 1.1-19.4-.7-26.1-7.4-6.7-6.7-8.5-16.4-7.4-26.1 1-9.7 4.7-20.3 10.3-31.7 11.2-22.8 30.4-48.9 55.5-74s51.3-44.4 74.1-55.6c11.4-5.6 21.9-9.2 31.6-10.2 1.8-.2 3.6-.3 5.4-.3z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFrisbeeIcon })
);

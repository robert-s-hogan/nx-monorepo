import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconElbowPadIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'elbow-pad'];
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
        d="M414.6 20.26c-16.2 0-33.3.02-50.4.07-65.5.12-125.1.36-130.5.36-18.7 39.24-33.1 82.51-45.3 127.51 38.8 11.2 77.1 28 109.6 47.8 19.4 11.8 36.8 24.5 50.9 37.9 15.6-20.8 34.3-47.2 53-74.6 21.8-31.9 43.7-65.23 60.9-92.86 11.7-18.81 21-35.08 26.7-46.02-7.7-.04-18.1-.14-30.7-.14v.05c-13-.05-28.1-.07-44.2-.07zM158.4 159.2c-4.4 7.5-8.8 15.2-13.1 23.1 66.2 2.3 131.7 38.9 170.4 72.9l6.3 5.6-5 6.6c-8.2 10.8-15.6 37.2-3.5 66.5l5.7 13.7-14.8-1.3c-63.5-5.9-127.4 4.7-187.8 31.8 1.6 5.6 3.4 11.2 5.5 17 66.4-29.3 145.1-39.7 233.4-25.6 15-24.4 20.9-48.4 10.3-80.9-8-24.1-37.4-53-77.2-77.2-38-23.2-85.1-42.2-130.2-52.2zm-19.3 41h-2.9c-22 45.5-36.93 97.5-23.9 160.1 57.8-25.3 119.1-36.3 180.1-32.8-6.9-25.2-2.9-48 5.5-63.5-37.8-31.1-100.2-63.6-158.8-63.8zm137 181c-41.5.3-80 6.7-115.2 18.2 10.4 32 24.3 63.7 41.2 94.5h138.2c-1.5-36.9-6.6-74.2-15.5-110.3-16.7-1.8-32.9-2.5-48.7-2.4z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconElbowPadIcon })
);

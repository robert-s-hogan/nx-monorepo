import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCannonBallIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'cannon-ball'];
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
        d="M18.22 19.22V144.5l24.19 19c1.02-5.3 2.84-10.8 5.31-16.5 7.36-16.9 20.6-35.6 38.22-53.25 17.66-17.62 36.26-30.86 53.26-38.22 5.4-2.37 10.7-4.14 15.8-5.19l-25.4-31.12zM164.1 68c-4.3.15-10.5 1.65-17.4 4.69-14 6.07-31.3 18.07-47.55 34.31-16.21 16.2-28.21 33.5-34.28 47.5-3.03 7-4.53 13.1-4.68 17.4-.13 3.5.46 5.4 1.28 6.6 5.27 4.8 12.65 10.2 18.47 15.3 5.09 4.5 11.53 6 17.5 5.4 5.96-.6 11.96-2.7 18.26-5.7 12.7-6.2 26.8-16.5 40.3-30 13.4-13.5 23.8-27.6 29.9-40.2 3.1-6.4 5.2-12.4 5.8-18.3.5-5.99-.6-12.73-5.4-17.53-4.8-5.01-10.5-12.16-16-18.35-2-.67-4-1.03-6.2-1.12zm9 35.2c-.3 2.6-1.6 6.9-4 11.9-4.8 10.1-14.1 22.9-26.3 35.2-12.3 12.2-25.1 21.5-35.2 26.4-5 2.4-9.34 3.6-11.97 3.9-1.76.2-2.55-.5-2.51-2.5.25-2.6 1.51-6.9 3.93-11.9 4.85-10.1 14.15-22.9 26.35-35.2 12.2-12.2 25.1-21.5 35.1-26.3 5-2.5 9.4-3.7 12-4 2.1.1 2.8.6 2.6 2.5zm17.5 99.9l91.6 137.5-54.9 4.8 84.7 75.5-41.3 16.2c80.9 53.3 172.4 74.5 205.1 41.7 32.8-32.7 16.4-131.5-35.7-185.5l-4.1 41.9-59.3-89.2-7.6 57zm241.9 192.4c21.8 0 39.3 17.4 39.3 39.3 0 21.8-17.5 39.3-39.3 39.3-21.8 0-39.3-17.5-39.3-39.3 0-21.9 17.5-39.3 39.3-39.3z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCannonBallIcon })
);

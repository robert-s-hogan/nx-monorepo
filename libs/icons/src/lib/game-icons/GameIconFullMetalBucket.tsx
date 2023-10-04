import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFullMetalBucketIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'full-metal-bucket'];
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
        d="M256 137c-43.5 0-82.8 5.4-110.6 13.7-13.8 4.1-24.8 9.1-31.6 14-6.9 4.8-8.8 8.7-8.8 11.3 0 2.6 1.9 6.5 8.8 11.3 1.5 1.1 3.3 2.2 5.3 3.3.6-8.6 7.1-14.5 14.4-18.9 7.7-4.6 17.7-8.1 29.8-11.2 24.2-6 56.7-9.6 92.7-9.6s68.5 3.6 92.7 9.6c12.1 3.1 22.1 6.6 29.8 11.2 7.3 4.4 13.8 10.3 14.4 18.9 2-1.1 3.8-2.2 5.3-3.3 6.9-4.8 8.8-8.7 8.8-11.3 0-2.6-1.9-6.5-8.8-11.3-6.8-4.9-17.8-9.9-31.6-14-27.8-8.3-67.1-13.7-110.6-13.7zm-16.1 29.2c-17.8.2-43.1 1.8-66.2 8.4-35.9 10.5-31.2 27.7-31.2 27.7 20-14.8 40.1-23.3 120.5-35.4 0 0-9.2-.8-23.1-.7zm-133.4 37.9l2 17.4C139.6 240.1 197.9 251 256 251c11.6 0 23.3-.4 34.7-1.3.2-6 .2-11.9.2-17.8-11.3.7-22.9 1.1-34.9 1.1-44.9 0-85.6-5.4-115.7-14.4-13.5-4.1-24.9-8.8-33.8-14.5zm299 0c-7.9 5.1-17.8 9.3-29.3 13.1-.3 5.4-.5 11-.8 16.8 10.8-3.6 20.3-7.8 28.1-12.4l2-17.5zm-79.8 24.2c-5.5.8-11.1 1.5-16.8 2.1 0 5.8 0 11.7-.1 17.6 5.5-.6 11-1.4 16.3-2.2.3-5.8.4-11.7.6-17.5zm-214.6 15.1l25.5 217c6.5 8.1 21.9 16.5 42.7 21.9 22 5.7 49.3 8.7 76.7 8.7h4.5c13.9-75 26.4-149.6 29.6-223.1-11.2.7-22.7 1.1-34.1 1.1-54 0-107.8-7.7-144.9-25.6zm289.8 0c-8.2 3.9-17.1 7.4-26.7 10.4-5.7 83.6-18.9 187.9-24.8 223.1 12.3-4.9 21.4-10.8 26-16.5l25.5-217zm-76.7 21.1c-5.3.7-10.6 1.4-16 1.9-3 74.5-15.5 149.3-29.3 223.9 5.2-.3 10.3-.8 15.3-1.3 13.3-75.4 25.7-150.6 30-224.5z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFullMetalBucketIcon })
);

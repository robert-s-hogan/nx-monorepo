import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAnteaterIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'anteater'];
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
        d="M20.93 47.67v45.47C164.2 106.4 292.2 266.2 292.2 266.2S402.7 280 458.4 391.1c3.2 7.7 12.7 11.3 21.1 8.3 8.5-3.3 13.8-13.3 10.6-22.5-25.3-70.5-61.2-128.3-104.1-174.5-8.7 5.1-24.9 6.2-36.6 2.7l53.1-39.2s-17.5-23.3-53 1.1C252.9 83.01 131.6 47.67 20.93 47.67zm.36 86.83v40.2c44.33 42.9 8.87 84.4 46.12 144.3l11.46-40.5c-2.86 67.3 38.53 101.3 38.53 101.3l1.5-39s4 40 79.4 83.3l40.2-17.9-3.5 23.3c-4.2 3.2 28.4-5.5 41.4-28.8l28.9 19.2s-15.1-59.1-103.7-115.7c-77.1-49.1-84.4-145.7-180.31-169.7zm0 77.8v101.5l17.46-3.7c-14.15-38.2-2.5-79.6-17.46-97.8zm371.51 29.6 16.1 18.5c3.1 3.5 3.1 9.1-1.1 12.3-1.2 1.5-3.2 2.2-5.3 2.2h-.1c-2.4 0-4.7-1-6.5-2.9l-16.3-18.5c-3.1-3.7-2.8-9.2.9-12.5 4-2.9 9.3-2.1 12.3.9zM147.3 422.2c6.6 32.8 54.5 60.3 72.9 9.6l-30.7 13.8zm124.1 5.4-25.7 12.5c-2.3 13.2-16.2 23.5-16.2 23.5 34.8 5.8 44.6-26.5 41.9-36zm19.1 1s1.6 19.3-14.4 32.3c25-2.7 31.3-25.5 31.3-25.5z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAnteaterIcon })
);

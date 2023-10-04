import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCloudRingIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'cloud-ring'];
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
        d="M245.22 31.387c-70.06.15-134.335 31.794-168.1 90.28-5.223 9.045-8.83 18.417-12.24 28C122.157 70.996 219.372 40.6 292.07 82.57c78.822 45.506 98.658 158.253 44.405 252.223-25.855 44.782-63.857 77.026-105.15 93.723 95.38 29.26 195.698-.307 240.96-78.704 54.027-93.574 8.905-220.773-100.055-283.68-40.858-23.59-84.976-34.837-127.01-34.747zm-24.763 49.945c-40.357.123-84.108 16.545-122.254 49.408C19.45 198.588-6.02 311.192 41.32 382.244c4.577 6.87 9.9 12.55 15.434 18.137C20.79 331.21 31.144 244.728 83.69 199.46c56.97-49.083 141.443-31.06 188.98 40.292 22.654 34.003 32.705 73.913 30.926 111.78 51.07-67.13 63.006-155.83 23.347-215.356h-.002C302.534 99.54 263.42 81.2 220.458 81.332zm-63.36 107.71c-26.76.083-53.228 9.95-73.05 29.65-48.848 48.55-47.855 142.19 1.144 205.94 49 63.75 128.323 76.074 177.17 27.524-47.107 29.645-84.88 26.3-128.778-20.916-39.45-42.43-24.435-122.8 24.62-171.554 23.376-23.234 51.128-35.812 77.675-37.696-21.48-22.033-50.296-33.034-78.78-32.947z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCloudRingIcon })
);

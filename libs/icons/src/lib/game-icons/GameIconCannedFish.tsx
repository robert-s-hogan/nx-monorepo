import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCannedFishIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'canned-fish'];
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
        d="M256 65c-65.3 0-124.4 10.69-166.36 27.5-20.99 8.4-37.64 18.3-48.6 28.7C30.09 131.5 25 141.8 25 152s5.09 20.5 16.04 30.8c10.96 10.4 27.61 20.3 48.6 28.7C131.6 228.3 190.7 239 256 239c65.3 0 124.4-10.7 166.4-27.5 20.9-8.4 37.6-18.3 48.6-28.7 10.9-10.3 16-20.6 16-30.8s-5.1-20.5-16-30.8c-11-10.4-27.7-20.3-48.6-28.7C380.4 75.69 321.3 65 256 65zm.1 13.53c51.3 0 97.8 6.57 132.1 17.57 17.2 5.5 31.4 12 41.9 20 10.6 7.9 18 18 18 29.9 0 11.9-7.4 22-18 29.9-10.5 8-24.7 14.5-41.9 20-34.3 11-80.8 17.6-132.1 17.6s-97.8-6.6-132.1-17.6c-17.2-5.5-31.43-12-41.95-20-10.51-7.9-17.95-18-17.95-29.9 0-11.9 7.44-22 17.95-29.9 10.52-8 24.75-14.5 41.95-20 34.3-11 80.8-17.57 132.1-17.57zm0 17.97c-49.8 0-94.8 6.6-126.7 16.7-15.9 5.1-28.5 11.2-36.49 17.2-8.01 6.1-10.81 11.3-10.81 15.6 0 4.3 2.8 9.5 10.81 15.6 7.99 6 20.59 12.1 36.49 17.2 31.9 10.1 76.9 16.7 126.7 16.7s94.8-6.6 126.7-16.7c15.9-5.1 28.5-11.2 36.5-17.2 8-6.1 10.8-11.3 10.8-15.6 0-4.3-2.8-9.5-10.8-15.6-8-6-20.6-12.1-36.5-17.2-31.9-10.1-76.9-16.7-126.7-16.7zM25 192.2V360c0 13.2 5.88 24.6 17.7 35.4 11.81 10.8 29.56 20.4 51.32 28.1C137.5 439 196.8 447 256 447c59.2 0 118.5-8 162-23.5 21.7-7.7 39.5-17.3 51.3-28.1 11.8-10.8 17.7-22.2 17.7-35.4V192.2c-1.2 1.3-2.4 2.5-3.7 3.7-13.3 12.6-31.8 23.4-54.3 32.3-44.8 18-105.8 28.8-173 28.8s-128.2-10.8-173.05-28.8c-22.45-8.9-40.94-19.7-54.27-32.3-1.28-1.2-2.5-2.4-3.68-3.7zM96 280l64.4 48.2c33.3-15.3 71.8-34.1 135.7-34.1 40 0 120 25.9 120 46 0 19.9-80 45.9-120 45.9-63.9 0-102.4-18.9-135.7-34.2L96 400z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCannedFishIcon })
);

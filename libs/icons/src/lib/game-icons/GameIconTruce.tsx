import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTruceIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'truce'];
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
        d="M145.3 23.89L89.27 257.7c5.62-4.9 12.93-5.8 19.63-4.4l54-225.21zm37 6.1l-57 231.41c1 .8 1.9 1.8 2.7 2.7 39.2-14 117.2-32 127.1 32.2 15.2 99.1 96.8 135.8 148.9 114.8-27.8-99.6 87.6-116.8 70.7-205.1 0 0-111 26.4-131.6-90.6-23.5-58.14-101.6-103.33-160.8-85.41zM101.4 270.9c-6.91 22.3-10.68 51.2.6 67.9 5.4 30.1 34 51.5 49.4 57.5-12.2 4.6-24.8 2.8-35.4-3.3-5.6 11.4-18.71 17.5-29.76 21 7.21 8.8 15.46 16.7 23.96 22.4 4.3 18.2 7.3 41.8 12.7 56.9h114.7c-31.7-18.6-56.8-42-61.3-69.9 8.6-18.2 10.5-46.2-.5-70.9-14.8-22.7-54.9-22.9-61.1-48.3-2.5-11.2 5.2-40.6-13.3-33.3zm-41.38 13c-7.17 1.5-11.98 8.3-10.24 14.7 8.66 1 17.82 2.2 26.53 3.8.38-4.1 1-8.2 1.73-12-6.18-2.5-12.48-4.8-18.02-6.5zm-16.91 32.2c-7.45 1.7-10.55 12.4-3.69 15.7 13.81.8 28.8 2.6 40.96 4.9-2-5-3.24-10.1-3.9-15.3-10.35-2.2-22.62-4.3-33.37-5.3zm-3.18 33.5c-8.95 5.5.2 16.2 4.7 18 15.57 2 29.64 2.7 41.1-1.8 4.51-2.5 4.29-4.4 2.89-8.3-16.82-3.7-33.26-6.4-48.69-7.9zm57.96 29.7c-12.54 8.9-32.12 8.5-44.89 7.4 1.64 6 7.89 9 10.92 10.2 9.37 3.7 22.37-1.1 33.47-8.4 3.21-2.7 4.51-8.7.5-9.2zm-45.46 32.2l-13.18 54.9 17.5 4.2 13-54.3c-6.59-.5-11.94-2.1-17.32-4.8z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTruceIcon })
);

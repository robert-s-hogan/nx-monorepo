import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconKeyLockIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'key-lock'];
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
        d="M288.7 30.45h-1.1c-.9.1-1.8.21-2.6.45-3.5.96-6.5 3.01-9 8.19L139.7 319.5c4.7 1.7 9.3 3.7 13.9 5.9 4.5 2.2 8.9 4.6 13.1 7.2L303 52.23c2.5-5.17 2.3-8.82.9-12.09-1.3-3.27-4.2-6.2-7.8-7.95-2.4-1.15-5-1.74-7.4-1.74zm19.6 52.13l-34.1 70.12 16.1 7.9 24-49.3 10.2-20.85zm39.4 1.36l-48.2 98.86 45 21.9 7.7-15.6-21.8-28.4 18.8-38.8 35.7-.4 7.7-15.7zm37.6 191.16c-57 0-103 46-103 103s46 103 103 103 103-46 103-103-46-103-103-103zm0 27a32 32 0 0 1 32 32 32 32 0 0 1-18.5 29l18.5 83h-64l18.5-83a32 32 0 0 1-18.5-29 32 32 0 0 1 32-32zM93.19 329.4c-6.31.1-12.42.7-18.2 1.9-21.01 4.3-37.52 15.6-45.78 32.6-8.26 17-6.97 37 2.6 56.2 9.61 19.4 27.7 37.5 51.81 49.2C107.8 481 133.2 484 154.4 479.6c21-4.3 37.5-15.6 45.7-32.6 8.3-17 7-37-2.6-56.2-9.6-19.4-27.7-37.5-51.8-49.2-16.6-8-33.8-12-49.8-12.2zm-3.31 28.2c6.42 0 13.02 1.5 19.22 4.5 7.9 3.9 14.3 9.8 18.5 16.7 1.8-.2 3.7-.3 5.5-.3 6.4.1 12.9 1.6 19.1 4.6 19.7 9.6 30.1 32.1 21 50.8-9.1 18.7-33.2 24.4-52.9 14.9-7.9-3.9-14.3-9.8-18.5-16.7-8.14.9-16.77-.4-24.69-4.3-19.7-9.6-30.01-32.1-20.92-50.8 6.25-12.9 19.57-19.6 33.69-19.4z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconKeyLockIcon })
);

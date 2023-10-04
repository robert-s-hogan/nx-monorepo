import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAxeSwordIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'axe-sword'];
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
        d="M329.5 29.12l-8.1 11.4L359 67.16l8.1-11.44zm-88 5.04l24.2 45.36 1.8 1.29 14.8-40.36zm57.6 12.63l-16.4 44.8 40.7 28.81 35.3-31.54c-.9-.58-1.9-1.19-2.8-1.84zM59.83 48.56l10.84 45.83 29.63 2.6 2.7-29.63zM470.9 75.41c-5.6 4.71-12.2 8.59-19.5 11.74 5 46.45-14.7 83.45-45.2 109.75-26.5 22.9-60.9 38.4-95 47.9-2.5 4.8-5 9.2-7.4 13.1 41.5 5.4 93.2-21.2 129.2-60 19.8-21.3 34.8-45.9 41.1-69.2 5.2-19.4 4.7-37.42-3.2-53.29zm-351.3 8.71l-3 32.48-32.35-2.9 226.55 271 20-16.7 15.3-12.8zM434 93.09c-4.2 1-8.5 2-12.8 2.7-14.9 2.5-30.1 3.1-43.5.3l-41 36.61c4 7 5 15.7 4.5 24.5-.6 12.6-4.3 26.7-9.3 40.9-3 8.3-6.3 16.6-9.9 24.6 26.9-9.2 52.6-22.3 72.5-39.4 26.2-22.8 42.5-51.6 39.5-90.21zM274 107.4l-51.2 72.2 30.6 36.5 58.2-82.1zM173.8 248.8L34.53 445.2l37.53 26.6L204.3 285.3zm233 79.2L273.3 439.5l19.2 23.1L426 351zm-18.3 77.9l-35.3 29.4 39.7 47.6 35.3-29.4z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAxeSwordIcon })
);

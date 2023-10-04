import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBurningEyeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'burning-eye'];
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
        d="M235.094 17.844C60.934 66.176 249.458 163.35 184.72 198.22c-32.796 17.66-86.03 15.048-64.657-73.876-106.688 86.723-75.665 284.316 48.093 349.5-27.153-25.674-44.125-62.01-44.125-102.25 0-77.624 63.128-140.75 140.75-140.75 77.625 0 140.75 63.128 140.75 140.75 0 37.55-14.77 71.708-38.81 96.97 150.706-76.96 122.903-288.475 22.5-342.533 23.96 56.174 11.553 99.36-18.22 123.44C385.64 57.762 174.494 135.013 235.094 17.843zM264.78 249.53c-67.523 0-122.06 54.54-122.06 122.064s54.54 122.062 122.06 122.062c67.523 0 122.064-54.538 122.064-122.062 0-67.522-54.54-122.063-122.063-122.063zm0 53.782c46.983 0 85.283 38.3 85.283 85.282s-38.3 85.25-85.282 85.25c-46.98 0-85.25-38.268-85.25-85.25s38.27-85.28 85.25-85.28zm0 18.688c-36.88 0-66.56 29.712-66.56 66.594 0 36.88 29.68 66.562 66.56 66.562 36.882 0 66.595-29.68 66.595-66.562 0-36.88-29.712-66.594-66.594-66.594zm0 18.656c26.45 0 47.876 21.457 47.876 47.906 0 26.45-21.426 47.875-47.875 47.875-26.447 0-47.905-21.425-47.905-47.875 0-8.41 2.19-16.315 6-23.187 1.84 12.334 12.466 21.813 25.313 21.813 14.14 0 25.593-11.486 25.593-25.625 0-8.62-4.25-16.236-10.78-20.875.59-.022 1.185-.032 1.78-.032z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBurningEyeIcon })
);

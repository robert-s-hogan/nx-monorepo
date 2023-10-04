import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAerialSignalIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'aerial-signal'];
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
        d="M138.188 38.875C67.478 79.483 19.624 155.295 19.624 242.688c0 87.858 48.383 163.966 119.72 204.406-47.45-46.694-78.25-120.545-78.25-204.406 0-83.27 30.218-157.06 77.093-203.813zm237.687 2.313c45.574 46.86 74.75 119.59 74.75 201.5 0 82.128-29.53 154.623-75.313 201.468C444 403.043 490.344 328.56 490.344 242.686c0-85.87-46.022-160.33-114.47-201.5zm-179.28 46.718c-61.425 24.617-105.126 84.56-105.126 154.78 0 70.413 43.995 130.262 105.686 154.75-41.348-30.252-69.47-88.174-69.47-154.748 0-66.367 27.774-124.45 68.908-154.782zm142.5 8.78c35.18 31.963 57.81 85.566 57.81 146 0 61.134-23.1 114.77-58.967 146.595 52.006-28.25 87.593-83.246 87.593-146.592 0-62.886-35.052-117.566-86.436-146zm-115.22 44.064c-42.65 14.34-73.125 54.454-73.125 101.938 0 47.91 30.968 88.504 74.22 102.5-27.047-18.556-45.97-57.28-45.97-102.5 0-44.573 18.457-83.072 44.875-101.938zm78.094 3.344c23.836 19.926 39.342 56.72 39.342 98.594 0 42.514-15.99 79.48-40.437 99.187 38.416-16.463 65.375-54.746 65.375-99.188 0-44-26.476-81.867-64.28-98.593zM262 211.344c-20.3 0-36.75 16.45-36.75 36.75 0 15.484 9.573 28.743 23.125 34.156v213.125h27.25V282.25c13.558-5.41 23.125-18.668 23.125-34.156 0-20.3-16.45-36.75-36.75-36.75z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAerialSignalIcon })
);

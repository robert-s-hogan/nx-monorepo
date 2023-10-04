import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDirewolfIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'direwolf'];
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
        d="M145.14 22.185c9.508 36.595 15.32 71.885 14.22 108.31 21.73 18.495 44.074 28.207 68.035 38.93 11.813 5.288 23.99 10.82 36.37 17.69-24.702-70.606-62.676-117.77-118.626-164.93zM27.122 25.887C24.958 45.21 27.53 71.24 34.12 97.38c6.96 18.72 16.942 37.974 27.595 54.67 15.003 23.516 32.422 42.276 40.48 46.868l-9.27 16.244c-14.91-8.496-31.08-28.122-46.978-53.037-9.383-14.708-18.273-31.144-25.328-47.943v196.584l43.17 1.76c-2.8-23.054-4.248-45.878-2.73-66.516l18.614 1.382c-2.313 31.474 3.16 71.293 9.656 108.65 110.615 90.673 195.362 124.516 260.695 131.175l-95.107-66.8 40.053-15.876L152.44 332.58l38.505-1.738c-28.377-14.028-48.9-32.894-63.144-55.63l1.464-22.964c35.81 41.623 89.82 73.71 151.373 98.096l-43.164 6.068 112.765 52.193-22.39 25.518 119.7 42.32c16.61-5.68 31.058-12.678 43.66-19.464-97.364-69.615-123.58-131.642-168.034-193.962l-.008-.01c-34.93-45.653-68.47-60.9-103.4-76.534-33.725-15.094-68.975-30.612-101.788-72.558L27.123 25.887zm156.344 175.59l89.894 46.75-24.032 17.57c18.66 30.458 55.134 55.834 91.12 72.86-50.826-7.884-103.33-32.248-148.212-69.427l29.815-20.224-38.583-47.53z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDirewolfIcon })
);

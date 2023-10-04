import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPigIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'pig'];
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
        d="M213.705 344.935l2.7 53.87h-26.24l-19.46-55.41zm150.56.33l-.34 4.38 18.15 49.16h24.44l-5.66-56.51a326.16 326.16 0 0 1-36.57 2.97zm32.79-164.08a90.06 90.06 0 0 0 13.05-1.12c51.2-7.62 36.49-49.56 36.49-49.56s-40.36 9-52.83 23.42c.02 0-28.12 27.26 3.31 27.26zm81.85-25.33s-6.81 0-15.92.82a47 47 0 0 1-13.28 22.9 116.55 116.55 0 0 1 7.44 14.09c25.25-9.43 21.79-37.81 21.79-37.81zm11.8 100.18v41.49s-53.15 31.9-134.5 31.9c-2.19 0-4.44-.15-6.67-.2l-5.48 69.58h-19l-24.45-66.86-162.59-5.87-9.4 72.73h-22.63s-48.15-101.58-23.18-182.06c-5.55-3.84-11.38-8.17-16.73-12.7-5.13 2.65-10.26 4.11-15 3.85-15.76-.85-28.37-12.73-29.78-14.09l11.16-11.46c2.6 2.5 11.21 9.13 19.48 9.57a7.93 7.93 0 0 0 1.7-.11 46.36 46.36 0 0 1-4.59-6.47c-5.65-9.83-7-20.32-3.84-28.79a25.1 25.1 0 0 1 15.94-14.87c11.29-3.81 26.85-3.35 34.75 4.9 2.94 3.07 7.24 9.84 3 20.7-3.59 9.29-10.85 19.34-19.36 27.12 2.87 2.3 5.94 4.61 9.09 6.87 9.46-20.85 24.84-39.58 48.52-53.76a238.9 238.9 0 0 1 124-34.31 259.14 259.14 0 0 1 120.54 30.12 80.94 80.94 0 0 0-7.77 9.25c-7.6 10.67-9.67 20.49-6.15 29.19 2.85 7 10.23 15.42 29.24 15.42a105 105 0 0 0 15.41-1.3 80.49 80.49 0 0 0 24-7.18c15.75 25.72 17.22 58.67 28 61 12.79 2.72 26.29 6.34 26.29 6.34zm-406.69-94.52c.43-1.12 1.05-3.11.32-3.87-1.32-1.38-4.81-2.26-8.92-2.26a29.18 29.18 0 0 0-9.16 1.42c-3.13 1.05-5.12 2.81-6.09 5.38-1.46 3.95-.46 9.62 2.75 15.19a36.3 36.3 0 0 0 4.79 6.25c6.66-5.82 13.19-14.04 16.31-22.11zm331.14 81.55a9.05 9.05 0 1 0-9.05 9.05 9.05 9.05 0 0 0 9.05-9.05z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPigIcon })
);

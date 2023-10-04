import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDetourIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'detour'];
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
        d="M486.945 25.055L347.49 52.945l23.78 23.784L390.544 96l-56.793 56.795c-27.393-22.7-57.978-32.844-86.97-32.06-33.838.918-64.92 15.95-87.858 38.888-22.94 22.94-38.084 54.114-39.406 88.178-1.138 29.306 8.49 60.407 30.742 88.485L19.27 467.27l25.46 25.46 155.48-155.484-12.476-12.726c-24.72-25.22-33.185-51.125-32.246-75.323.94-24.198 11.9-47.13 28.89-64.12 16.988-16.988 39.66-27.71 63.38-28.352 23.72-.643 49.04 8.152 73.633 33.5l12.727 13.115L416 121.457l43.055 43.053 27.89-139.455zM256 192a64 64 0 0 0-64 64 64 64 0 0 0 64 64 64 64 0 0 0 64-64 64 64 0 0 0-64-64z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDetourIcon })
);

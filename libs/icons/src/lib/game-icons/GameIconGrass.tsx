import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconGrassIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'grass'];
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
        d="M18 494l36.35-330.4c6.728 107.62 4.086 231.82 35.556 295.67 11.205-84.926 15.707-168.18 10.562-249.01 15.225 71.69 35.543 141.68 39.468 217.14 7.395-55.935 12.667-111.52 31.798-169.41-.76 65.19-17.16 124.9 12.677 157.47 14.433-51.01 28.992-101.9 31.46-164.88 21.27 61.862 18.342 135.82 24.948 205.02 8.417-68.06 15.28-257.84 46.907-318.17-3.11 124.98-3.862 223.94 27.398 274.23 30.897-38.673 33.566-114.44 34.28-186.34 21.812 61.75 36.457 132.1 37.857 218.34 8.626-71.955 18.667-143.91 43.39-215.86-5.748 88.29-1.284 156.95 19.525 194.17 13.76-55.55 25.504-111.1 29.12-166.66 18.42 82.78 13 159.59 16.706 238.69z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconGrassIcon })
);

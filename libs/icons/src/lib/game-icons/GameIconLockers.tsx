import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLockersIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'lockers'];
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
        d="M25 73v414h142V73H25zm160 0v414h142V73H185zm160 0v414h142V73H345zM39 112h18v23h78v-23h18v41H39v-41zm160 0h18v23h78v-23h18v41H199v-41zm160 0h18v23h78v-23h18v41H359v-41zM39 176h18v23h78v-23h18v41H39v-41zm160 0h18v23h78v-23h18v41H199v-41zm160 0h18v23h78v-23h18v41H359v-41zM64 279c13.7 0 25 11.3 25 25s-11.3 25-25 25-25-11.3-25-25 11.3-25 25-25zm160 0c13.7 0 25 11.3 25 25s-11.3 25-25 25-25-11.3-25-25 11.3-25 25-25zm160 0c13.7 0 25 11.3 25 25s-11.3 25-25 25-25-11.3-25-25 11.3-25 25-25zM64 297c-3.97 0-7 3-7 7s3.03 7 7 7 7-3 7-7-3.03-7-7-7zm160 0c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7zm160 0c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7zM48 407h96v18H48v-18zm160 0h96v18h-96v-18zm160 0h96v18h-96v-18zM48 441h96v18H48v-18zm160 0h96v18h-96v-18zm160 0h96v18h-96v-18z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLockersIcon })
);

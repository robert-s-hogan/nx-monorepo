import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSideswipeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'sideswipe'];
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
        d="M422.52 404.55c0-92.006-1.243-95.736-1.243-95.736 204.583-58.483-212.586-77.202-252.76-71.863l-.15 34.762-118.71-68.004 118.346-65.303 1.394 33.82c303.74-5.71 371.256 83.987 253.124 232.325z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSideswipeIcon })
);

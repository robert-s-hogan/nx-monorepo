import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconConvergenceTargetIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'convergence-target'];
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
        d="M172.7 19.27l-25.4 25.46L256 153.5 364.7 44.73l-25.4-25.46L256 102.5l-83.3-83.23zM44.73 147.3l-25.46 25.4L102.5 256l-83.23 83.3 25.46 25.4L153.5 256 44.73 147.3zm422.47 0L358.6 256l108.6 108.7 25.4-25.4-83.2-83.3 83.2-83.3-25.4-25.4zM256 358.5L147.3 467.3l25.4 25.4 83.3-83.2 83.3 83.2 25.4-25.4L256 358.5z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconConvergenceTargetIcon })
);

import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCrossroadIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'crossroad'];
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
        d="M164 16l-32 16 32 32 64 16V32l-64-16zm184 0l-64 16v48l64-16 32-32-32-16zM247 32v112h18V32h-18zM16 64l182.7 182.7L96 496h320L313.3 246.7 496 64h-64L256 192 80 64H16z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCrossroadIcon })
);

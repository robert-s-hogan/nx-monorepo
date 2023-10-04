import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHorizontalFlipIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'horizontal-flip'];
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
        d="M387.02 278.627v67.883L477.53 256l-90.51-90.51v67.883H124.98V165.49L34.47 256l90.51 90.51v-67.883h262.04z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHorizontalFlipIcon })
);

import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFallingStarIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'falling-star'];
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
        d="M166.4 25.64l-12.8 12.72 160 160.04 12.8-12.8-160-159.96zm-32 95.96L128 128l-6.4 6.4 160 160 12.8-12.8-160-160zm-96.08 32L25.6 166.4l160 160 12.8-12.8-160.08-160zm314.78 86.6l-29.4 84.1-85.4 26 71 54-1.7 89.2 73.2-50.8 84.4 29.1-25.7-85.3 53.8-71.2-89.1-2-51.1-73.1z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFallingStarIcon })
);

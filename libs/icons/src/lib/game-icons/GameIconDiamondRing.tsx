import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDiamondRingIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'diamond-ring'];
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
        d="M191.02 25.346l-22.9 34.35h30.714l22.9-34.35H191.02zm52.347 0l-22.898 34.35h71.06l-22.897-34.35h-25.266zm46.9 0l22.9 34.35h30.714l-22.9-34.35h-30.714zm-117.234 52.35l50.115 50.115-25.058-50.115h-25.057zm45.182 0L256 153.265l37.785-75.57h-75.57zm95.695 0l-25.058 50.115 50.115-50.115H313.91zm-134.435 31.898C109.163 139.5 59.693 209.29 59.693 290.348c0 108.185 88.122 196.306 196.307 196.306 108.185 0 196.307-88.12 196.307-196.306 0-81.057-49.47-150.848-119.782-180.754l-30.517 30.517c64.397 19.592 111.037 79.292 111.037 150.238 0 86.966-70.08 157.045-157.045 157.045-86.966 0-157.045-70.08-157.045-157.045 0-70.946 46.64-130.646 111.037-150.237l-30.517-30.516z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDiamondRingIcon })
);

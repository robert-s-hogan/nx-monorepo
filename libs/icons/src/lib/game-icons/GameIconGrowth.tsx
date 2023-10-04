import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconGrowthIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'growth'];
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
        d="M256 33.78C205.2 119.6 154.2 177 103.7 228.7c101.3-39.2 203.3-39.2 304.6 0C357.8 177 306.8 119.6 256 33.78zm0 183.02c-10.4 0-20.8.5-31.3 1.4 6.5 104.2-48.4 216.9-158.29 268.8H445.6c-109.9-51.9-164.8-164.6-158.3-268.8-10.5-.9-20.9-1.4-31.3-1.4z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconGrowthIcon })
);

import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconWaterBottleIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'water-bottle'];
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
        d="M121.4 33v30h78.1V33zm11 48c-16.4 16.58-42.95 46.2-42.95 71v39H231.5v-39c0-24.8-26.5-54.42-43-71zM89.45 209v16H231.5v-16zm0 34v16H231.5v-16zm0 34v16H231.5v-16zm0 34v170.2c43.05 12.7 98.95 12.7 142.05 0V311zm224.85 34l14.3 142H345l-6.9-118.5 18-1L363 487h45.3l14.3-142z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconWaterBottleIcon })
);

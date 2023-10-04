import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCaltropsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'caltrops'];
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
        d="M119.244 19.566l-8.69 4.383-8.265 95.438-42.533 18.619.504 10.965 32.906-7.02-64.55 96.463 15.677-3.02 75.582-91.835 71.578 22.966 12.79-8.94-80.325-37.44-4.674-100.579zm262.844 73.059l-1.326 133.818L264.54 280.49l5.178 9.428 124.004-27.285 69.574 111.066 12.47-1.574L419.2 253.283l63.684-4.54.982-9.554-72.344-16.646L391.55 94.219l-9.461-1.594zm-177.994 99.326l-19.065 2.504-14.972 134.44-102.29 18.001 14.393 16.79 74.115-4.155L85.844 488.25l17.611 1.525 82.639-120.525 132.7 34.564 18.151-9.138-137.863-62.242 5.012-140.483z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCaltropsIcon })
);

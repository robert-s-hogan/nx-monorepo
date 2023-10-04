import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFootstepsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'footsteps'];
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
        d="M145.454 182.99c16.485-8.948 34.84 9.218 46.38 32.816.153 12.414 4.804 23.314 10.484 32.06l-22.083 20.402c-29.716-13.468-59.267-63.634-39.823-81.6a25.137 25.137 0 0 1 5.054-3.667zm64.64 74.46l-22.486 20.76c27.48 48.827 65.94-.32 22.485-20.76zm87.67 113.92a25.136 25.136 0 0 0-5.054 3.668c-19.444 17.965 10.106 68.13 39.823 81.598l22.083-20.402c-5.68-8.746-10.32-19.645-10.486-32.06-11.538-23.597-29.893-41.763-46.38-32.816zm64.64 74.462l-22.487 20.757c27.48 48.804 65.942-.332 22.474-20.758zM297.23 207.9c-14.674 11.68-5.112 35.667 12.095 55.502 11.36 4.994 19.586 13.527 25.42 22.166l27.433-12.367c-.805-32.616-35.444-79.41-59.575-68.52a25.136 25.136 0 0 0-5.35 3.218zm43.315 88.58c1.846 47.988 62.107 31.763 27.88-12.593zm-206.7-263.423c-11.314 14.957 3.893 35.774 25.443 50.768 12.25 2.012 22.332 8.284 30.12 15.172l23.478-18.78c-8.816-31.398-53.977-68.19-74.65-51.623a25.136 25.136 0 0 0-4.392 4.438zm63.905 75.064c13.68 46.036 68.048 15.385 23.894-19.112l-23.882 19.112z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFootstepsIcon })
);

import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconWingCloakIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'wing-cloak'];
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
        d="M254.22 19.78c-8.89 0-17.316 4.814-24.064 14.032-6.748 9.22-11.28 22.648-11.28 37.657 0 15.007 4.532 28.437 11.28 37.655 6.748 9.218 15.174 14.03 24.063 14.03 8.888 0 17.313-4.812 24.06-14.03 6.75-9.218 11.283-22.648 11.283-37.656 0-15.01-4.534-28.44-11.282-37.657-6.747-9.22-15.172-14.032-24.06-14.032zm-71 80.564c-3.742.026-7.026 1.21-9.532 3.72h-.032c-15.052 15.07 13.468 37.41 3.97 77.06-15.963 66.63-95.553 120.79-159.22 151.75 25.314 24.212 73.335-.004 113.47-37.843-27.484 36.044-59.557 67.277-89.564 94.095 37.994 20.533 88.767-26.55 124.094-86.25-24.198 53.547-58.515 101.02-90.812 141.563 45.916 15.528 92.305-48.115 118.875-121.25-13.033 61.304-35.024 119.312-57.22 170.25 98.32 7.795 132.337-254.94 88.656-355.063-10.166-23.302-29.326-38.127-42.687-38.03zm141.968 0c-13.36-.096-32.522 14.73-42.688 38.03-43.68 100.123-9.694 362.86 88.625 355.063-22.196-50.937-44.187-108.945-57.22-170.25 26.57 73.136 72.992 136.78 118.908 121.25-32.298-40.543-66.646-88.015-90.844-141.562 35.326 59.7 86.13 106.783 124.124 86.25-30.007-26.818-62.11-58.05-89.594-94.094 40.134 37.84 88.186 62.056 113.5 37.845-63.666-30.96-143.288-85.12-159.25-151.75-9.5-39.652 19.02-61.99 3.97-77.063-2.508-2.51-5.79-3.692-9.533-3.718z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconWingCloakIcon })
);

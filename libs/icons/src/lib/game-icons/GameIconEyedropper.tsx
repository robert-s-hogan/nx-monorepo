import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconEyedropperIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'eyedropper'];
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
        d="M72.156 21.906c-19.51-.096-34.187 10.357-43.47 26.47-14.848 25.778-10.262 56.354 29.845 79.56 26.354 15.25 61.527 23.54 86.75 20.126l-11.374 19.72 15.25 8.812 49.688-86.25-15.25-8.813-10.5 18.22c-9.66-23.603-34.394-49.968-60.75-65.22-15.04-8.703-28.482-12.566-40.188-12.624zm134.375 92.53l-9.343 16.22 171.75 99.375h-56.25l-129.562-75-9.344 16.19L382.53 292l3.376 1.97 3.75-1.033c3.705-1.014 10.983-.39 18.344 1.844 7.36 2.237 14.843 5.778 19.656 8.564l2.188 1.25h.72c.224.082.458.145.686.22-.38 1.393-.594 2.858-.594 4.373 0 9.165 7.43 16.594 16.594 16.594 9.165 0 16.594-7.428 16.594-16.592 0-6.497-3.75-12.09-9.188-14.813 1.873-3.64 2.85-7.855 2.156-12.406-.77-5.067-4.173-10.32-9.187-13.22-10.71-6.198-25.414-17.442-27.97-27.688l-.967-3.843-3.438-1.97-208.72-120.813zm242.94 235.47c-18.66 69.634-44.595 59.99-44.595 100.75 0 24.617 19.98 44.563 44.594 44.563 24.613 0 44.592-19.947 44.592-44.564 0-44.002-25.602-29.875-44.593-100.75z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconEyedropperIcon })
);

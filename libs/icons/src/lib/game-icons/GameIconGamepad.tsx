import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconGamepadIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'gamepad'];
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
        d="M155.084 125.945c-.46 0-.926.01-1.397.034-5.646.285-12.097 2.464-20.707 8.204-21.824 14.55-51.912 60.395-67.834 110.005-15.92 49.61-18.046 102.25 5.936 132.966 4.142 5.306 13.387 8.93 23.756 8.846 10.216-.084 20.682-3.838 26.482-9.44 1.022-1.47 9.296-13.336 21.39-27.404 12.863-14.96 28.716-31.686 45.835-38.777 41.863-17.34 93.024-17.34 134.887 0 17.118 7.092 32.97 23.818 45.834 38.778 12.095 14.068 20.37 25.933 21.39 27.404 5.8 5.602 16.267 9.356 26.483 9.44 10.368.085 19.612-3.54 23.755-8.846 23.973-30.704 21.885-83.575 5.978-133.287-15.907-49.713-46.054-95.526-67.783-109.624-11.498-7.46-19.198-8.73-26.285-7.64-7.088 1.093-14.347 5.197-22.866 11.07-17.038 11.746-38.898 30.02-73.952 30.02-35.212 0-57.115-18.514-74.13-30.356-8.505-5.92-15.73-10.025-22.743-11.078-1.315-.198-2.65-.312-4.03-.317zm212.904 48.75a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zM135 183h18v32h32v18h-32v32h-18v-32h-32v-18h32v-32zm200.988 23.695a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm64 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm-32 32a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm-160 7h32v18h-32v-18zm64 0h27.897v18h-27.897v-18z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconGamepadIcon })
);

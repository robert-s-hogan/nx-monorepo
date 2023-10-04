import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconRecycleIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'recycle'];
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
        d="M255.875 19.75c-15.54.336-30.444 4.193-44.97 10.5l22.47 42c7.42-2.652 15.023-4.442 22.5-4.5 25.633 0 52.754 13.658 73.47 49.47l16.624 28.874 20.217-11.656 43.407 75.187-53.5 30.844 107.812 62.186V178.312l-33.062 19.063-59.5-104.156c-27.476-47.506-71.07-73.848-115.47-73.47zm-75.22 57.844L72.813 139.78l32.282 18.595-56.156 98.313c-25.153 43.508-26.934 92.827-6 131.968 8.675 16.22 21.838 29.508 37.5 40.47l24-40.47c-8.042-6.36-14.9-13.912-19.5-22.5-12.51-23.402-13.322-54.64 4.5-85.47l13.624-23.436-19.687-11.375 43.313-75.03 53.968 31.093V77.594zm255.157 267.562c-1.564 7.687-3.835 14.362-7.5 21-12.83 23.206-38 40.5-77.968 40.5h-24.438v22.906h-86.78V367.5L131.31 429.656l107.813 62.188v-37.22h111.22c54.52 0 98.506-25.648 119.967-64.468 7.566-13.695 11.738-29.242 13.5-45h-48z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconRecycleIcon })
);

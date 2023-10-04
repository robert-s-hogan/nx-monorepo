import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHoodIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'hood'];
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
        d="M257.375 32.03C139.957 87.197 42.343 247.886 17.5 367.75c71.742 0 124.22 22.845 162.094 63.03l10.47-11.436c-28.06-28.873-64.935-52.446-113.564-75.906 26.142-65.033 66.028-163.458 116.72-169.188 19.835-2.243 41.05 9.735 64.155 43.438 72.33-120.27 141.014 38.54 180.875 125.75-47.687 25.854-84.5 49.463-112.97 78.718l9.25 10.406c37.335-39.758 89.657-64.812 162.72-64.812C467.784 249.384 377.24 90.37 257.375 32.03zm-79.72 243.314c-15.3-.083-26.405 6.436-26.405 16.656 0 12.58 16.834 26.038 37.594 30.063 20.76 4.024 37.594-2.92 37.594-15.5s-16.835-26.038-37.594-30.063c-3.893-.755-7.657-1.137-11.188-1.156zm156.345 0c-3.53.02-7.295.4-11.188 1.156-20.76 4.025-37.593 17.483-37.593 30.063 0 12.58 16.833 19.524 37.592 15.5 20.76-4.025 37.594-17.484 37.594-30.063 0-10.22-11.105-16.74-26.406-16.656z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHoodIcon })
);

import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconEnergiseIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'energise'];
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
        d="M280.938 19.22l-21.094 64.468L204.78 48l6.47 87.313-85.094-55.97 47.78-14.874-72.06-43.75h-79.47v63.343l96.938 46.093-58.78 17.5L189.5 225.78 94.594 229l73.906 47.125-102.75 41.813 84 24.812-66.78 78.22 96.56-25.283 11.19 98.188 65.093-76.72 47.375 76.126 18.343-72.842 47.564 24.718-10.563-117 84.626 51.28-50.47 7.252L492.5 456.03l1.03-82.5-63.31-53.436 54.967-4.594-100.906-66.375 85.158-38.656-72.282-24.314 70.47-34.625-57.907-20.06 44.53-51.5-80.906 14.343 5.97-70.657-61.158 58.5-37.22-62.937zm-1.407 72.25l9 2.405 68.22 18.28 9.03 2.44-2.405 9.03-2.28 8.5L383.03 138l9.033 2.406-2.438 9.03-65.03 242.75-2.408 9.033-9.03-2.44L183 363.907l-9.03-2.406 2.405-9.03 65.063-242.75 2.406-9 9.03 2.405 21.94 5.875 2.28-8.5 2.437-9.03zm13.064 22.75l-4.78 17.78-17.877-4.78.032-.126-12.908-3.47-60.218 224.657 112.094 30.033 60.218-224.657-12.906-3.47-.03.158-17.908-4.813 4.782-17.78-50.5-13.53zm-22.125 32.5l75.5 20.218-27.033 100.812-23.78-10.72 17.624-33.717-55.874-25.938 13.563-50.656zm-27.72 103.405l24.22 10.938-13.595 25.687 52.844 28.438-10.72 40-75.47-20.22 22.72-84.843z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconEnergiseIcon })
);

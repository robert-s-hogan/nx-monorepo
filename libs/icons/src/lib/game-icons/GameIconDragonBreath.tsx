import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDragonBreathIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'dragon-breath'];
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
        d="M15.327 12.997v61.32c76.696 54.194 157.847 147.575 64.827 125.566 57.116 55.067 104.12 26.786 174.037 135.492 30.42 47.297 7.473 80.54-29.785 90.524-47.88 12.828-114.353-30.45-57.82-54.314-59.296-1.45-66.954 47.977-38.727 80.237-27.93-9.635-46.01-34.308-43.034-60.605-36.043 48.278-5.362 93.284 54.313 102.43h357.42v-344.57c-15.752-70.31-94.876-87.764-103.372-3.504 14.61-36.423 50.96-20.625 84.1 18.688-11.28-7.498-24.24-11.49-36.21-11.097-19.73.65-37.36 12.086-41.466 36.794 55.902-46.113 84.628 34.717 61.74 76.876-24.744 45.582-94.89-20.467-95.03-75.71-27.974 31.235-7.813 108.298 52.37 122.548C304.635 301.29 342.743 182.92 295.655 157.84 324.383 285.473 121.728 62.26 66.137 13h-50.81z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDragonBreathIcon })
);

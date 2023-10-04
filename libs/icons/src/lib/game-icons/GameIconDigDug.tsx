import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDigDugIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'dig-dug'];
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
        d="M117.4 17.8l-94.9 96.3c16.2 19.2 43.7 35.5 66.2 40.2 15.3 3 30.6 1.8 43.3-4.7 29.3 28.9 58.2 58.3 87 87.9l22.2-22.3-87.6-87.5c6.3-12.6 8.5-27.95 4.5-42.8-8.2-30.5-21.2-47.58-40.7-67.1zm125.1 9.5c-9.3.1-18.5.9-27.5 2.7 117.1 70.5 204.6 164.7 273.6 273.7 2.8-59.2-21.2-120.2-59.3-169.7-15 5.5-33.5.6-46.4-12.2-12.8-12.9-17.7-31.4-12.2-46.4-39.3-29.9-84.3-48.3-128.2-48.1zM128.4 60.2c5.7 9.5 9.5 19.2 11.3 28.3 3.3 16.5.2 30.1-8.6 38.9-8.7 8.7-22.3 11.8-38.8 8.6-9.1-1.8-18.8-5.6-28.4-11.3zm263.5 15.9c-7.2 7.04-6.6 21.6 4.3 32.4 10.8 10.9 25.3 11.4 32.5 4.3 7.1-7.2 6.9-22-4.3-32.5-8.7-8.13-23.1-13.47-32.5-4.2zm-56.3 71.2L22.3 460.7c4.2 11.5 10.7 20.4 24.5 24.9L360.3 172c-7.5-8.7-15.8-16.9-24.7-24.7zm-43.2 119.1l-23.1 23.1c32.5 34 65 68.3 97.4 102.5-15.6 14.5-31.7 27.2-46.5 36.1 55.9 56 124.9 78.1 162 54.5 22.8-37.3 1.1-106.5-54.5-162.1-9.6 15-22 30.7-35.5 45.7z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDigDugIcon })
);

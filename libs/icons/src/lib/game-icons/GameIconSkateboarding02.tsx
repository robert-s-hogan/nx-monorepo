import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSkateboarding02Icon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'skateboarding-02'];
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
        d="M285.3 436c8.3 5 10.6 16 5.2 25-5.5 8-16.6 10-24.8 5-8.3-6-10.6-17-5.2-25 5.4-8 16.5-11 24.8-5zM62.2 235.2l-.1 39.1 270 176.7 35.8-15-8.4-20-25.4 12S117.9 285.9 83 263.1l.1-27.8zm242-150.1C363.6 95.9 425 122.8 478 162.8l-165.6-10-29.2 33.6 55.2 90.3-23.3 105.8-37.4-23.2 2.1-81.7-47.1-60.8-9.8 54.4-68.8 11.5-40.2-22.5 54.8-21.5c-27-44 4.9-86 4.9-86l-3.6-12.3-101.7 78.4c10.2-75 57.5-117.5 120.4-132.7 3.6 28.7 28.1 50.9 57.7 50.9 30 0 54.7-22.8 57.8-51.9zM95 311.1c8.2 5.3 10.5 16.3 5.1 24.5-5.3 8.1-16.3 10.4-24.5 5-8.1-5.3-10.4-16.3-5.1-24.4 5.4-8.2 16.3-10.5 24.5-5.1zM55 183c6.7-59.7 38.7-90 69-105.2 30.3-15.3 59-15.7 59-15.7C90.9 48.5 45.6 78.8 55 183zm-23.4-60.1C35.9 84.4 57 63.2 77 51.6 97 40 116 38 116 38c-59.3-8.8-91.9 21.1-84.4 84.9zm214.8-81.4c20.6 0 37.3 16.7 37.3 37.3 0 20.6-16.7 37.3-37.3 37.3-20.6 0-37.3-16.7-37.3-37.3 0-20.6 16.7-37.3 37.3-37.3z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSkateboarding02Icon })
);

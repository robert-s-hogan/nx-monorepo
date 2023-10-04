import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconRibbonShieldIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'ribbon-shield'];
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
        d="M256 32.19c34.6 42.07 92.8 57.46 150.1 71.71L395.7 198c-66.1-6.6-103-9.9-139.7-9.9-36.6 0-73.6 3.3-139.7 9.9l-10.5-94.1C163 89.65 221.4 74.26 256 32.19zM421.3 195.3c19.3 5.9 41.8 9.2 67.3 10.4-11.8 11.1-32.7 23.3-34.3 39.2-1.6 18.9 4.7 36.3 12.1 52.5-17.3 1-33.2-1.8-48.7-6.3 7.2-32.4 7.3-57.7 7.3-82v-6.2c-3.7-7.6-2.9-6.3-3.7-7.6zm-330.73 0l-3.5 7.7-.1 6c-.2 24.3 0 49.7 7.3 82.1-15.6 4.5-31.5 7.3-48.8 6.3 7.4-16.3 13.8-33.6 12.2-52.6-4.4-17.5-21.7-28.8-34.4-39.1 25.6-1.2 48.1-4.5 67.3-10.4zM256 206.1c38 0 77 3.7 151 11.1-.1 27.5-1.3 55.1-13.4 94.1-133.3-14.7-141.9-14.7-275.2 0-12.2-39.1-13.5-66.7-13.4-94 74-7.4 113-11.2 151-11.2zm0 111.9c32.4 0 65.1 3.4 125.3 10l-6.2 55.6c-7.3 36.1-36.6 60.3-65.3 75.6-25.9 13.7-49.1 19.5-53.8 20.6-4.7-1.1-27.9-6.9-53.8-20.6-28.7-15.4-58-39.5-65.3-75.6l-6.2-55.6c60.2-6.6 92.9-10 125.3-10z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconRibbonShieldIcon })
);

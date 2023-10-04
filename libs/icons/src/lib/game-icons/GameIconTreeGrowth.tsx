import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTreeGrowthIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'tree-growth'];
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
        d="M184.5 18.95v.25c-18.1 38.63-45.1 72.36-77.7 103l37.7-4-51.3 65.1 24.8-7.9-33.6 54.8 16.5 9.9-65.3 92.1 36.1.2L20 416l63.6-8.1 12 32.1 66.4-25.3-11.3 78.4h52.9l-6.5-68.2 38.2 16.4 10.2-24.8 44.3 21 56.4-20.8-37.1-64.1-12.4-2.3c4.8 12.4 9.7 24.7 14.6 37.1-23.6-9.3-47.3-18.5-70.9-27.7v35.8c-27.8-17-55.7-33.7-83.5-50.6-13.3 12.9-26.4 26-39.6 39 1.3-16.6 2.8-33.3 4.3-49.9l18.2 1.6c4.8-4.8 9.6-9.5 14.4-14.2 22.6 13.5 45.1 27.3 67.6 40.9v-29.9c18.8 7.4 37.6 14.7 56.4 22.1-3.7-9.5-7.5-19.1-11.2-28.6 20.7 3.7 41.3 7.6 62 11.4l-34.5-39c-10.1 6-20.2 12.1-30.4 18-6.5-7.4-12.9-14.9-19.4-22.3l-18.2 4.5c-3.8-22.5-7.8-44.9-11.7-67.4 17.7 20.4 35.5 40.8 53.2 61.2l43.9-26c-24.6-19.6-49.6-48.8-49.6-48.8L265 261c-17.7-23.4-35.5-46.8-53.2-70.2-12 25.3-24 50.7-36.1 76-2.4-20.3-4.8-40.6-7.3-60.9l16.5-2c7.7-16.3 15.4-32.6 23.2-48.8 11.5 15 22.9 30.1 34.3 45.1-.5-8.6-1.1-17.2-1.6-25.8 12 4.5 24.1 8.9 36.2 13.3l-26.1-35.2-55.9-28.8c-6.2 14-12.4 28.1-18.6 42.1-5-14.8-10.1-29.7-15.1-44.5l16.9-5.8c2.5-5.9 5.1-11.7 7.7-17.52 19.5 9.92 38.9 20.02 58.3 30.02l16.4-5.5C217.2 88.23 196 53.65 184.5 18.95zM416 66.79L337.7 210.3l56-14L377.5 465h77l-16.2-268.7 56 14L416 66.79z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTreeGrowthIcon })
);

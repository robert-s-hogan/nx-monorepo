import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFemaleLegsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'female-legs'];
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
        d="M329.4 16.38c20.7 13.71 33.6 29.78 39.1 48.03 7.7 25.32.6 52.79-15.1 80.89-2.2 3.9-4.3 7.7-6.3 11.5 21.2 42.5 38.6 84.8 44.4 128.3 4.9 17.3-25.6 32.3-23.8 44.5 2.4 12.6 9.3 17.2 18.6 22.6 11.4 6.2 23.2 13.3 26.8 25 5.8 21 13.4 31.6 19.7 37 6.3 5.4 11.4 6.3 15.3 6.8 10.8 1.2 22.5-1.2 28.9-4.7 4.2-2.3 6-5.2 4.4-7.9-19.6-36.2-53.5-73.4-54-114.3.6-60.2-22.8-129.8-13.7-196.25 4-29.33 3.5-44.93-1.2-52.6-16.8-27.67-54.3-27.75-83.1-28.87zM30.05 18.72C76.23 100.3 192 102.1 276.4 99.03L265 114.1c-25.3 33.5-29.9 62.3-29.7 92.5.3 30.3 6.3 61.8 1.7 97.4-2.2 17.3-14.5 28.6-24.2 37.5-4.9 5.7-15.9 11.5-16.1 19.7-.1 16.2 2.7 24.5 6.2 32.3 3.5 7.7 8.5 15.6 10.1 27.8 2 14.9 1.8 26.8 3.2 35.9 1.3 9 3.5 15.1 10.7 22.2 11.4 9 25.5 10.9 34.8 8.8 4.5-1.1 10.7-3.9 9-7.4-26.9-55.9-11.5-108.3-2.5-161.5 9.7-58.5 31.8-115.3 69.4-182.8 14.4-25.8 19.4-48.02 13.7-66.89-5.6-18.56-22-35.81-55.1-50.89z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFemaleLegsIcon })
);

import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSabersChocIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'sabers-choc'];
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
        d="M286.313 15.688l-27.344 93.437-99.345-81.188 2.844 59.626-62.5-71.313 55.405 155.094L45.53 153.656l71.44 67.813-99.5 41.81 113.968 24.095-66.875 97.75 86.718.47.27-.16-53.226 76.985 98.78-66.066 25.552 94.302L283.5 384.75l51.313 99.97-20.25-102.876L429.53 424.5l-41-125.594 74.22-90-88.25-9.03 98-112.19-118.53 76.5 12.436-120.25-70.625 74.97-9.467-103.22zm-64.22 92.218c-1.85 32.582 5.535 54.595 29.22 88.75 3.503 5.053 7.998 11.39 13.218 18.5 27.253-31.716 53.06-65.5 72.283-95.875 9.52 26.452-16.487 79.21-51.032 123.75 14.97 18.868 32.62 39.58 51.033 57.97l17.78-17.78 13.22 13.217-23.657 23.657 42.03 42.03-13.217 13.22-42.033-42.03-23.656 23.655-13.217-13.22 18.187-18.188c-17.205-16.823-34.137-35.352-49.97-54.937-12.22 12.986-24.73 24.26-36.56 32.563 5.864 14.06 3.938 31.497-11.75 47.187l-23.657-23.688-48.657 48.657-13.22-13.22 48.626-48.624-23.625-23.656c15.812-15.81 35.026-16.877 50.094-9.688 12.003-11.6 24.51-24.447 37.032-38.062-12.025-16.877-23-34.274-32.468-51.844-23.307-43.25-21.733-65.31 14-82.344z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSabersChocIcon })
);

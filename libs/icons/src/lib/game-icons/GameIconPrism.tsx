import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPrismIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'prism'];
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
        d="M151.6 14.53c6.3 31.6 8.8 64.1-45.8 78.2 34.3-9.8 71-8.8 78.2 45.67-.9-29.8-25.6-65.17 45.6-78.07-36.6 5.8-69.6-.1-78-45.8zM457.3 18L334.6 161.2 343 178l34.2-39.4-9.4 31.7 61.4-45.3-47.8 56.4 55.8-18.8-42.4 41.2 80.6-6.7-75.7 55.8 72 24.4-53.4 5.1 48.1 20-41.8-3.3 32.1 24.3-51-20.1 15.4 31 72.9 48.5V18zM256 43.88L153.2 249.5l-62.74 34.8-58.97 2.8c11.23 5.2 19.12 10.6 24.75 16.2l-44.61 24.8 8.74 15.8 46.07-25.6c3.99 9.5 4.36 19.1 5.55 28.4l31.21-48.8L139 278 49.44 457H462.6zm0 40.25l51.6 103.17-129 51.6zm59.7 119.37l35.7 71.5.7 1.4-158.2-24.3zm-150.6 62.4L362 296.2 433.4 439H78.56zm-16 75.9s-47.2 80.2-45.2 83.5c2.3 3.8 67.5.9 97.2-3.3-53.8-3.1-76.1-38.1-52-80.2z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPrismIcon })
);

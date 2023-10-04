import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconRoastChickenIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'roast-chicken'];
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
        d="M202.53 22.063c-14.444-.148-26.79 7.923-37.03 21.343-56.29-1.126-97.6 65.597-97.156 161.22l63.156-59.907c-2.308 17.56-3.47 35.46-3.47 52.593 0 4.755.11 9.49.345 14.156-22.385 1.342-38.15 22.47-38.53 56.78-.523 47.068 28.09 101.12 63.905 120.72 8.09 4.427 15.85 6.71 23.03 7.06 2.023 25.098 5.245 57.273-4.06 77.25-11.23 24.11 27.313 26.95 31.436 4.158 12.777 21.508 45.44 1.61 27.5-15.657-15.42-14.84-24.725-47.46-32.78-71.967 5.65-3.972 10.35-9.736 13.843-17.125 11.793 5.728 24.353 8.843 37.405 8.843 13.042 0 25.62-3.092 37.406-8.81 3.492 7.376 8.2 13.126 13.845 17.092-8.056 24.51-17.36 57.128-32.78 71.97-17.942 17.265 14.722 37.164 27.5 15.656 4.122 22.79 42.665 19.95 31.436-4.157-9.305-19.977-6.083-52.152-4.06-77.25 7.18-.35 14.94-2.633 23.03-7.06 35.815-19.6 64.428-73.652 63.906-120.72-.38-34.326-16.13-55.456-38.53-56.78.234-4.666.343-9.402.343-14.157 0-17.132-1.158-35.036-3.47-52.594l63.156 59.905c.443-95.64-40.88-162.37-97.187-161.22-20.115-26.323-48.325-31.894-84.595 4.376-17.822-17.82-33.678-25.575-47.594-25.718z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconRoastChickenIcon })
);

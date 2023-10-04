import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTwoFeathersIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'two-feathers'];
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
        d="M177.438 17.625c-36.363 63.13-6.562 132.455 51.593 167.906 73.338 44.71 85.25 182.336 197.44 180.032 18.768 37.002 32.436 74.428 42 113.844L486.624 475c-7.386-30.444-17.18-59.834-29.75-88.72 19.49-32.138 28.49-64.438 35.938-96.75L477.5 306.657c1.212-13.487.876-26.89-.688-41l-13.625 26.938c2.42-20.608 3.05-39.98 3.875-59.5l-19.53 33.97c-2.876-17.033-6.577-33.074-10.188-49.252l-8.25 30.97C371.358 118 210.67 101.476 177.438 17.624zM33.78 106c-83.367 187.217 151.31 342.733 292.44 323.47 29.146 16.715 54.977 35.964 78.905 58.436l12.78-13.625c-18.923-17.77-39.093-33.676-61-47.936-1.57-28.975-9.564-53.884-18.56-78.156l-6.22 42.843c-10.212-27.47-23.103-48.372-35.813-69.717l3.22 51.968c-9.037-24.734-22.188-45.01-36.032-64.53l5.094 42.97c-16.975-23.893-34.854-40.735-52.656-58.064l12.625 37.594C144.105 263.974 78.553 196.544 33.78 106z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTwoFeathersIcon })
);

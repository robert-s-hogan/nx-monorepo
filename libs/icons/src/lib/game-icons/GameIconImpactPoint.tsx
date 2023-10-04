import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconImpactPointIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'impact-point'];
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
        d="M97.594 11.22c48.787 64.184 76.194 134.662 96.812 220.093H117.03l12.47 15.25 28.438 34.78 94.437 118.25 23.313-29.437 101.03-123.594 12.47-15.25h-74.782C335.026 145.88 362.43 75.405 411.22 11.22h-79.5C289.51 81.954 276.86 157.277 266.03 250h83.75l-96.655 118.25L156.437 250h86.25c-10.64-92.823-25.208-168.993-66.875-238.78H97.594zm4.875 362.56c-6.58 1.665-12.87 3.424-18.814 5.283-21.64 6.766-38.845 14.815-50 23.062-11.154 8.247-15.562 15.873-15.562 22.47 0 6.595 4.408 14.22 15.562 22.467 11.155 8.247 28.36 16.296 50 23.063 43.278 13.533 104.154 22.125 171.375 22.125 67.223 0 128.098-8.592 171.376-22.125 21.64-6.767 38.846-14.816 50-23.063 11.155-8.246 15.563-15.872 15.563-22.468s-4.41-14.222-15.564-22.47c-11.154-8.246-28.36-16.295-50-23.062-5.944-1.858-12.233-3.617-18.812-5.28 18.853 9.14 29.844 20.06 29.844 31.812 0 32.066-81.665 58.062-182.407 58.062-100.74 0-182.405-25.996-182.405-58.062 0-11.75 10.99-22.673 29.844-31.813zm63.936 5.72c-4.875 1.173-9.513 2.437-13.812 3.78-12.82 4.01-22.933 8.807-29.156 13.408-6.224 4.6-7.907 8.205-7.907 10.593 0 2.39 1.684 5.994 7.907 10.595 6.224 4.6 16.336 9.397 29.157 13.406 25.642 8.02 62.127 13.19 102.437 13.19 40.31 0 76.828-5.17 102.47-13.19 12.82-4.008 22.902-8.804 29.125-13.405 6.223-4.6 7.906-8.205 7.906-10.594 0-2.387-1.682-5.992-7.905-10.592-6.223-4.6-16.304-9.398-29.125-13.407-4.308-1.346-8.956-2.605-13.844-3.78 8.692 4.787 13.688 10.355 13.688 16.28 0 17.987-45.808 32.564-102.313 32.564-56.504 0-102.31-14.577-102.31-32.563 0-5.923 5.002-11.494 13.686-16.28z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconImpactPointIcon })
);

import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSharkFinIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'shark-fin'];
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
        d="M349.603 42.768c-31.36-1.053-234.946 205.685-280.595 309.828 26.998-7.923 58.257-15.23 82.4-13.004 22.594 2.083 40.82 15.274 57.844 26.603 17.023 11.33 32.575 20.703 48.654 20.416 16.378-.29 32.196-11.74 49.502-24.862 17.306-13.122 36.175-27.944 60.272-27.812 6.093.033 12.397.946 18.79 2.505-56.174-100.224-21.42-289.766-36.062-293.598-.255-.04-.523-.065-.805-.074zm21.586 312.37c-24.097-.13-42.966 14.69-60.272 27.813-17.306 13.123-33.124 24.573-49.502 24.864-16.08.287-31.63-9.086-48.654-20.416-17.023-11.33-35.25-24.52-57.844-26.603-25.39-2.34-58.66 5.86-86.557 14.234-27.895 8.372-50.07 17.28-50.07 17.28l6.706 16.702s21.492-8.624 48.54-16.743c27.047-8.12 60-15.37 79.73-13.55 16.277 1.5 32.278 12.186 49.523 23.663 17.244 11.476 36 23.838 58.946 23.43 24.043-.43 42.793-15.428 60.057-28.518 17.264-13.09 32.97-24.245 49.3-24.156 17.393.094 46.024 13.347 68.952 27.23 22.928 13.882 40.662 27.745 40.662 27.745l11.09-14.176s-18.476-14.464-42.43-28.967c-23.954-14.504-52.877-29.696-78.178-29.834zm1.91 41.12c-24.097-.132-42.966 14.69-60.272 27.812-17.306 13.122-33.124 24.572-49.502 24.864-16.08.286-31.63-9.087-48.654-20.416-17.023-11.33-35.25-24.52-57.844-26.604-25.39-2.34-58.66 5.86-86.557 14.234-27.895 8.374-50.07 17.28-50.07 17.28l6.708 16.703s21.49-8.623 48.537-16.74c27.048-8.12 60.002-15.37 79.73-13.552 16.28 1.5 32.28 12.187 49.524 23.664 17.244 11.477 36 23.84 58.946 23.43 24.044-.43 42.795-15.427 60.06-28.518 17.263-13.09 32.966-24.245 49.296-24.156 17.394.095 46.025 13.348 68.953 27.23 22.928 13.883 40.662 27.748 40.662 27.748l11.092-14.177s-18.476-14.464-42.43-28.968c-23.955-14.504-52.88-29.696-78.18-29.834z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSharkFinIcon })
);

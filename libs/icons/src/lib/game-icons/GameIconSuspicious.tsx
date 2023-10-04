import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSuspiciousIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'suspicious'];
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
        d="M255.422 18.346c-111.086 0-204.14 76.375-229.615 179.533-11.867 70.7 11.228 143.745 60.048 194.24-5.034 28.402-5.687 61.755-5.687 100.54h18.687c0-57.013 2.106-100.723 14.88-130.744 12.776-30.02 34.883-47.983 81.394-56.728l15.61-2.934-10.148-12.22c-16.364-19.7-27.22-48.142-27.22-79.84 0-30.586 9.785-58.117 25.093-77.66 15.308-19.54 35.707-30.99 57.99-30.99s42.683 11.45 57.99 30.99c15.308 19.543 25.094 47.074 25.094 77.66 0 31.072-9.61 59.05-25.186 78.55l-10.036 12.565 15.885 2.497c50.69 7.97 72.17 25.994 83.77 56.398 11.598 30.404 11.513 75.137 11.513 132.455h18.69c0-30.09.238-57.06-1.506-81.117 36.888-41.708 59.28-96.54 59.28-156.668 0-130.742-105.786-236.53-236.528-236.53zm8.2 43.45c30.12.1 60.5 7.25 88.24 21.995 99.02 52.642 132.557 179.59 80.525 276.79-1.816 3.392-3.722 6.703-5.698 9.95-1.455-5.895-3.186-11.558-5.256-16.985-.896-2.347-1.872-4.636-2.913-6.877 43.444-87.576 12.394-199.683-75.432-246.373-24.95-13.264-52.307-19.685-79.436-19.775-59.683-.2-118.266 30.23-147.71 85.798-25.907 48.89-22.56 108.01 5.224 152.838-4.82 4.473-9.11 9.337-12.906 14.582-34-50.89-38.835-119.552-8.834-176.17 32.91-62.107 97.928-95.992 164.195-95.77zm86.657 98.9c37.642 37.22 50.227 94.933 32.638 145.548-5.115-3.25-10.7-6.19-16.773-8.81 10.177-31.69 6.895-66.347-8.112-95-.702-14.7-3.382-28.753-7.754-41.74zM158.92 173.642c-2.762 11.597-4.24 23.864-4.24 36.55 0 7.46.533 14.768 1.543 21.875-1.932 21.073 3.05 42.43 14.21 60.077-6.35 1.94-12.302 4.153-17.867 6.638-19.113-32.745-21.045-74.92-2.818-110.215 2.726-5.28 5.8-10.255 9.172-14.925zm60.45 29.34c-15.794.205-19.24 4.585-24.546 8.15 12.483 11.99 36.9 10.832 47.748 0-4.992-4.043-10.37-8.317-23.203-8.15zm74.69.177c-15.794.205-19.24 4.586-24.546 8.15 12.483 11.992 36.9 10.833 47.748 0-4.992-4.042-10.37-8.317-23.203-8.15z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSuspiciousIcon })
);

import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLoggingIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'logging'];
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
        d="M25 18.393v52.394l135.89 180.76c2.32 3.08 6.53 4.55 12.2 4.55 19.66 0 57-17.53 94.79-46 48.74-36.64 79.86-77.51 69.51-91.27L261.868 18.394zm259.55 205.324c-2.77 0-5.52 0-8.26.08l-2.73 2c3.87-.18 7.57-.27 11-.27 28.7 0 77.27 5.81 77.27 27.57s-48.57 27.57-77.27 27.57c-24 0-61.9-4.06-73.66-18.12a141 141 0 0 1-23.15 7.69c1.69.54 3.47 1.08 5.36 1.61 24.32 6.87 56.8 10.65 91.45 10.65 34.65 0 67.13-3.78 91.45-10.65 26.07-7.36 33-15.48 33-18.75 0-3.27-6.91-11.36-33.01-18.73-24.32-6.87-56.8-10.65-91.45-10.65zm0 17.83c-16.91 0-30.31 1.66-40.31 3.83-5.94 3.57-11.77 6.82-17.44 9.73h.03c7.72 4.07 27.01 9.58 57.72 9.58 36.13 0 56.46-7.57 60.75-11.57-4.29-3.99-24.62-11.57-60.75-11.57zm-.01 5.74c11.37 0 20.59 2.6 20.59 5.82s-9.22 5.82-20.59 5.82-20.59-2.61-20.59-5.82l.05.01c0-3.21 9.17-5.83 20.54-5.83zm125.17 27.99c-7.24 4.52-17.02 8.52-29.34 12-25.69 7.26-59.72 11.26-95.8 11.26s-70.1-4-95.8-11.26c-12.187-3.453-21.884-7.417-29.09-11.89-1.48 34.13-6.42 65.73-14.75 94.19-8.14 27.84-19.53 52.78-33.84 74.12a199.84 199.84 0 0 1-24.46 30l123.09-22.92 95.45 42.83 81.67-47.53L487 479.248a404.32 404.32 0 0 1-30.17-46.81c-19.68-35.75-42.77-90.72-47.12-157.16z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLoggingIcon })
);

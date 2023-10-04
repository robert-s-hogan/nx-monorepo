import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPerfumeBottleIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'perfume-bottle'];
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
        d="M257.125 18.53c-43.358 0-78.25 34.79-78.25 77.907 0 43.118 34.892 77.907 78.25 77.907s78.28-34.79 78.28-77.906c0-43.118-34.922-77.907-78.28-77.907zm-88.5 117.314c-6.644 8.198-10.156 17.204-10.156 26.47 0 15.315 9.554 29.91 27.093 41.31 17.538 11.4 42.63 18.876 70.53 18.876s53.025-7.475 70.563-18.875c17.54-11.4 27.094-25.996 27.094-41.313 0-8.654-3.057-17.087-8.875-24.843-15.528 32.8-49.04 55.56-87.75 55.56-39.35 0-73.333-23.508-88.5-57.186zm-27.22 39.72c-44.97 28.067-73.686 72.15-73.686 121.03 0 83.262 83.312 152.594 188.374 152.594 105.06 0 188.375-69.332 188.375-152.594 0-48.867-28.708-92.93-73.658-121-4.323 17.498-16.962 32.665-33.968 43.72-21.18 13.765-49.568 21.874-80.75 21.874-31.183 0-59.54-8.11-80.72-21.875-17.015-11.06-29.65-26.24-33.968-43.75zM93.063 286.154h.032c14.633 56.066 82.046 98.406 163.125 98.406 81.077 0 147.834-42.338 162.467-98.406 2.013 7.54 3.938 15.033 3.938 23 0 66.954-74.647 121.344-166.406 121.344-91.76 0-166.44-54.39-166.44-121.344 0-7.967 1.27-15.46 3.282-23zM415.47 406.03c-38.153 37.933-95.66 61.845-159.376 61.845-63.68 0-121.16-23.885-159.313-61.78 5.558 20.953 20.806 40.113 43.595 55.374 29.125 19.503 70.212 31.967 115.75 31.967s86.594-12.464 115.72-31.968c22.81-15.277 38.07-34.46 43.624-55.44z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPerfumeBottleIcon })
);

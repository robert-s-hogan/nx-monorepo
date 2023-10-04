import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBeeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'bee'];
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
        d="M273.625 17.438l3.313 19.406L258.53 40l-3.717-21.594c-11.894 1.303-21.9 3.848-30.188 7.344L238.5 43.375l-14.688 11.563-15.343-19.5c-9.837 8.29-15.64 18.988-17.657 32.156l24.375-1.344 1.03 18.656-12.812.72c36.685 31.72 70.686 71.3 102.125 122.718 3.52-.453 7.054-.697 10.564-.72 2.396-.014 4.774.055 7.156.25 3.744.31 7.462.914 11.125 1.782 10.252-71.962-6.85-130.822-38.5-191.062-7.863-.71-15.335-1.137-22.25-1.157zM78.905 27.813C72.95 32.37 67.494 36.937 62.5 41.5l18.47 17.875-13 13.406-18.657-18.03c-9.15 10.155-16.053 20.23-20.907 30.125l20.125 4.72-4.28 18.218-22.438-5.282c-.528 2.05-.986 4.073-1.343 6.095-2.264 12.796-1.332 25.318 2.593 37.47l22.968-11.19 8.157 16.814-23.53 11.436c4.11 7.18 9.307 14.198 15.562 21.063 3.188 3.5 6.67 6.913 10.405 10.28l15.125-16.28 13.688 12.75-14.25 15.31c10.718 7.82 22.952 15.15 36.562 21.814l10.47-20.125 16.56 8.624-10 19.22c9.974 4.158 20.545 7.945 31.657 11.405l6.657-19.407 17.687 6.062-6.343 18.5c10.976 2.874 22.408 5.395 34.25 7.53l3.157-19.03 18.437 3.063-3.155 18.937c22.212 3.138 45.688 4.95 70.188 5.188l-.188 18.687c-20.204-.195-39.78-1.404-58.594-3.5-1.978 7.395-3.443 15.514-4.25 24.438-99.17-72.015-189.613 29.593-213.843 140 96.828 62.17 166.47 12.61 216.094-69.844l17.532 40.125 17.125-7.5-23.156-52.97c4.207-7.892 8.265-16.012 12.157-24.28 7.755 11.174 16.53 18.968 25.688 23.655l1.03 32.97.126 4.25 3.314 2.686 38.406 31.314 11.813-14.5-35.094-28.625-.72-22.75c11.463.746 22.9-2.88 33.125-10.345l.72 26.906.186 6.19 5.783 2.25 62.28 24.092 6.75-17.437-56.468-21.813-1.094-39.625c2.924-4.387 5.622-9.2 8-14.468 14.34 60.238 86.187 63.25 103.126 7.936 11.726-38.29-19.33-72.846-52.562-72l-10.156-47.25c29.243 7.773 54.154 23.793 73.906 55.906l15.906-9.78c-25.456-41.388-61.373-60.69-100.375-67.595l-13.688-2.406 2.938 13.564 13.25 61.812c-.644.294-1.298.58-1.938.906l-.062.032c-2.39.595-4.74 1.456-7 2.656-4.883 2.592-8.73 6.348-11.625 10.78-9.013-28.358-34.47-46.61-61.406-49.31 3.698 6.412 7.374 12.98 11 19.75l-16.47 8.81C243.755 130.22 169.122 70.843 78.907 27.813zM402.282 276.75c.325-.002.638.013.97.03 2.656.148 5.576.97 8.75 2.564 6.348 3.188 13.04 9.53 17.656 18.22 4.617 8.686 6.13 17.77 5.22 24.81-.912 7.04-3.827 11.552-7.97 13.75-4.142 2.2-9.527 2.096-15.875-1.093-6.347-3.187-13.038-9.53-17.655-18.217-4.617-8.688-6.13-17.773-5.22-24.813.912-7.04 3.827-11.55 7.97-13.75 1.812-.962 3.89-1.485 6.156-1.5z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBeeIcon })
);

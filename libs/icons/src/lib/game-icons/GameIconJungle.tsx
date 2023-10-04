import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconJungleIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'jungle'];
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
        d="M149.2 18c9.9 3.02 19.6 7.05 29.3 11.88 1.6-3.95 3.3-7.92 5.1-11.88zm77 0c10.4 14.85 23.5 29.07 40.9 31.59 20.6 2.97 39.8-11.67 55.4-25.02 2.6-2.21 5-4.4 7.3-6.57h-28.1c-12.1 8.7-25 14.78-32 13.78-5.3-.77-12.6-6.2-19.8-13.78zm147.9 0c2.6 4.63 5.6 9.68 8.9 14.84 11.4 17.59 26 37.44 47 40.45 20.6 2.98 39.8-11.67 55.3-25.02 3.1-2.63 6-5.28 8.7-7.84V18h-3c-4.4 4.68-10.5 10.7-17.4 16.61-14.3 12.24-32.3 22.13-41.1 20.87-9.1-1.32-23.9-16.28-34.4-32.44-1.1-1.69-2.1-3.37-3.2-5.04zM109.5 29.79c-28.56.22-57.93 12.8-91.5 46.32v86.59c14.71 37.1 45.74 64.6 67.85 81.1 4.72-23.7 10.23-62.7-14.87-97.7l-11.26-15.7 19.26 1.5c48.02 3.6 75.42 13.9 111.92 39.6-4.7-14.2-10.9-27.7-21-38.8-16-17.6-41.8-30.9-89.72-33.23l-13.64-.65 5.98-12.28c6.71-13.76 23.04-22.34 47.58-27.52 17.4-3.66 39.6-5.25 66.4-4.24-25.8-14.98-50.1-24.43-73.9-24.97h-3.1zm53.6 42.7c-11.5.3-21.7 1.2-30.6 2.57-1.1 4.65-2.1 9.3-3.2 13.94 9.9 2.81 18.6 6.32 26.3 10.41 2.2-8.95 4.7-17.92 7.5-26.92zm126.7 1.58c-2 0-4.1.14-6.1.32-21.3 1.96-43.7 13.33-70.8 29.01 26.2.5 45.7 3.2 60.3 7.1 20.3 5.4 31.9 13.6 39.4 20.1l16.9 14.7-22.4 1.1c-23.9 1.1-40.4 5.4-51.5 11.2-11.2 5.8-17.3 12.9-21.3 21.6-4.9 10.6-6 24.3-6.4 38.9 11.5-14 22.1-22.8 34.5-27.6 18.2-7.1 37.6-4.8 65.7-1.5l13.8 1.6-7.1 11.9c-18.5 31.1-17 60.7-13 81.7 28.4-16 70.7-33.6 75.8-74.7l1.6-13 11.5 6.1c24.2 13 53.3 22.2 83.3 26.7v-44.1c-11.5-12.4-24.6-21.2-46-25.4l-15.8-3.1 10.9-11.8c14.9-16.2 27.9-23.5 44.3-25.8 2.1-.3 4.3-.5 6.6-.7v-15.7c-5.5-1-11.1-1.8-16.8-2.1-31.8-1.98-63.7 6.9-78.9 27.9l-6.4 8.8-7.4-7.9c-37.6-39.52-64.7-54-90-55.25-.9 0-1.8-.1-2.7-.1h-2zm-173 81.23c-10.3 65.3-14.5 129.3-14.8 190.5 10 .7 19.8 2.2 29.2 4.6 4-61.6 3.9-123.5 12.3-186.4-8.5-3.7-17.1-6.5-26.7-8.7zm296.1 68.4c-1.6 5.9-3.9 11.3-6.6 16.4 52.2 80.4 67.5 166.5 67.3 253.9H494V339.7c-12-34.8-26.4-69.1-46.3-102.5-12.1-3.8-23.8-8.3-34.8-13.5zM40.15 263.8c-6.87 0-14.44.7-22.15 2v17.7c9.33-1.6 18.09-2.6 24.4-2.3 10.47.5 28.01 5.5 42.8 10.9.26-6 .56-12 .91-18.1-14.16-4.9-29.83-9.5-42.87-10.1-1.01 0-2.04-.1-3.09-.1zm192.15 7.3c-18.5 14.7-30.9 19.7-45.2 21.4-9.7 1.2-20.7.5-34.5-.5-.3 6-.5 12-.8 18 13.8 1 25.6 1.7 37.4.4 17.5-2.1 34.2-9.2 54.3-25.2zm184.8 45.6c-7.7-.1-15.5.3-23.1 1-20.4 1.9-40.1 6.3-55.6 12.2-5.9 2.2-11 4.8-15.5 7.5 52.1 3 82.6 8 113.3 16.4l2.7.8c-3.5-12.7-7.7-25.2-12.6-37.7-3.1-.1-6.1-.2-9.2-.2zm-184.8 38.4c-19-.2-36.9 7.6-59.7 29.5l-6 5.8-6.2-5.5c-20.4-18.1-58.2-24.2-93.57-20.2-17.67 2-34.62 6.4-48.11 12.4-.25.1-.47.2-.72.3v7.2c14.54.4 26.81.7 36.57 1.6 16.8 1.6 30.15 5.6 45.93 15l18.2 10.7-20.37 5.7C56.66 429.1 31.63 457.7 30 494h4.33c14.88-8.5 27.26-17.1 40.11-24.1 17.34-9.5 36.46-15.5 61.76-11.4l6.6 1.1.8 6.7c1.3 10.2 4.8 19.4 9.7 27.7h70.3c-1.8-7.2-4.7-14.6-9.3-22.3l-8.5-14.1c22.8.1 47.1 3.2 64.7 9.4 14.3 5.1 33 13.7 57.7 25.3-2.3-16.7-7.4-30.9-18.6-42-14.5-14.5-40.7-25.3-89-27.6l-16.8-.8c16.1-24.8 37.1-31.2 60-34 15.1-1.7 34-2.3 56.4-2.2-25.6-12-47.2-22.6-65.9-27.4-7-1.8-13.7-3-20.2-3.2zm210.2 13.1l-4.6 2.3c-19.4 9.9-33 20.8-41.2 34.1-6.2 10.1-9.5 22-9.4 37 14.7-10.1 24-18.2 34.5-24 8.3-4.6 17.2-7.2 28.7-7.5-2-14.1-4.6-28.1-8-41.9z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconJungleIcon })
);

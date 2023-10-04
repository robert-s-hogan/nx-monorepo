import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMeshBallIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'mesh-ball'];
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
        d="M253.3 19.39c-9.4.1-18.9.8-28.3 2 16.5 3.4 33.2 9.1 49.6 17.1 11.6 5.7 23 12.4 34.2 20.2 6.3-.5 12.5-.8 18.6-.9 7.2-.1 14.2 0 21.2.5 18.1 1.3 35.4 4.6 51.4 10-40.1-30.7-88.9-47.7-138.9-48.8-2.7-.1-5-.1-7.8-.1zm-58.5 17.4h-4.6c-6.1.2-12.2.8-18.1 1.9 14.4 7.3 29.9 19.4 46.3 35.3l4.6 4.6c19.1-7.2 38.3-12.6 57.1-16-4.6-2.7-9.1-5.1-13.7-7.3-24.4-11.9-48.7-18.2-71.6-18.5zm-57.9 14.9c-4.2 3-7.6 9.8-8.4 22.4-.9 13 1.2 31.11 6.4 52.21 10.6-7.7 21.8-15 33.6-21.8 11.8-6.81 23.7-12.91 35.6-18.21-15.7-15.1-30.2-25.9-41.9-31.7-6.1-3-11.1-4.4-15.1-4.9-3.6-.44-7.4.41-10.2 2zm-27.2 23c-19.08 22.6-30.22 53.71-32.73 90.01-.35 5-.53 10.2-.53 15.5 12.4-14.6 26.56-28.5 42.46-41.5-.6-2.1-1.2-4.2-1.7-6.3-5.6-22.1-8.3-41.61-7.5-57.71zm222.1 1.7c15 12.9 29.4 27.61 42.7 44.01 2.8-.8 5.6-1.6 8.4-2.3 20.8-5.4 39.5-8.3 55.4-7.4h.1c-22.6-19.71-54.2-31.21-91.1-33.71-5.1-.4-10.2-.6-15.5-.6zm-28.1 1.6c-21.6 2.4-44.1 7.5-66.7 15.4 16 17.71 32.5 38.61 48.8 61.91 24-11.5 47.5-21.3 69.5-28.8-16.1-18.9-33.6-35.21-51.6-48.51zm-85.5 22.71c-13.5 5.6-27 12.3-40.4 20-13.3 7.7-25.8 16-37.5 24.9 7.1 23.3 17.2 49.5 30.1 77.1 22.7-15.8 46.7-30.7 71-44.2 9.1-5.1 18.3-10 27.5-14.7-17.1-24.3-34.4-45.7-50.7-63.1zM68.35 111.9c-38.15 49.7-55.05 112.9-46.88 175 3.31-16.5 9.05-33.2 17.03-49.5 5.66-11.6 12.45-23.1 20.25-34.3-1.14-13.6-1.3-26.9-.4-39.8 1.25-18.1 4.6-35.4 10-51.4zm363.95 17.3c-12.2.1-27.5 2.5-44.7 7-.3.1-.6.2-.8.2 7.3 10.2 14.2 20.9 20.7 32.1 6.8 11.8 12.8 23.7 18.1 35.7 15.1-15.7 26-30.3 31.8-42 5.7-11.8 5.9-19.4 3.6-24-3.8-4.8-11.2-8.2-23.7-8.9-1.6 0-3.3-.1-5-.1zm-64.6 12.9c-22 7.1-46.3 17-71.2 28.9 9.5 14.4 18.9 29.5 28.1 45.4 9.8 16.9 18.7 33.8 26.8 50.2 23-16.3 43.2-32.8 59.9-48.4-5.6-13.5-12.3-27-20-40.4-7.3-12.6-15.2-24.5-23.6-35.7zm-243 16.2c-18.2 15.6-33.85 32.5-46.7 50 2.65 24 8.68 49 18.16 74.2 3-2.9 6.04-5.8 9.24-8.6 15.1-13.7 31.7-27.2 49.5-40.2-12.5-26.6-22.7-52.1-30.2-75.4zm348.6 13.8c-7.4 14.4-19.5 29.9-35.4 46.3-1.5 1.5-3 3-4.5 4.6 7.2 19.1 12.5 38.3 16 57.1 2.6-4.6 5-9.1 7.3-13.7 15.9-32.6 21.9-65.2 16.6-94.3zm-193.7 7.2c-9.7 4.9-19.5 10.1-29.1 15.5-24.7 13.7-49.1 29-71.9 45 7.6 15.2 15.9 30.8 24.9 46.5 10.1 17.4 20.6 34 31.1 49.6 16.8-8.2 34-17.3 51.4-27.4l.2-.1c17.5-10.1 34.1-20.5 49.7-31-8.2-16.9-17.4-34.2-27.5-51.7-9.4-16.2-19.1-31.8-28.8-46.4zm210.9 45.8c-3.3 16.5-9 33.2-17 49.5-5.7 11.6-12.5 23-20.3 34.2 1.2 13.6 1.3 27 .4 39.8-1.2 18.2-4.6 35.5-10 51.5 38.2-49.7 55.1-112.9 46.9-175zm-427.9 6.8c-2.63 4.5-5.08 9.1-7.32 13.7-18.29 37.5-23.4 74.8-13.5 107 8.44-18.5 22.34-37.1 39.94-55.7-8.8-21.8-15.18-43.6-19.12-65zm355.9 5.1c-16.9 15.3-36.7 31.1-58.9 46.8 11.4 24.6 20.7 48.2 27.7 69.9 18.1-15.6 33.8-32.5 46.7-50-2.4-21.6-7.6-44.1-15.5-66.7zm-255.3 13.8c-16.3 12.1-31.6 24.5-45.3 36.9-4.9 4.5-9.6 9-14.1 13.5 5 11 10.6 22 16.9 32.9 7.6 13.4 16 25.9 24.9 37.6 21.9-6.7 46.2-16 71.9-27.8-10.2-15.2-20.3-31.4-30.1-48.3-8.7-15.1-16.8-30.1-24.2-44.8zM344 294.5c-15.3 10.2-31.5 20.3-48.4 30.1-17 9.8-33.8 18.7-50.2 26.8 16.3 23 32.7 43.3 48.3 59.9 13.6-5.6 27.1-12.3 40.4-20 13.3-7.7 25.9-16 37.6-25-6.7-21.8-16-46.1-27.7-71.8zM90 315.8c-19.39 21.9-32.45 43-36.72 60.9 3.49 3.3 9.91 6.1 20.78 6.8 13.06.9 31.04-1.3 52.24-6.5-7.7-10.6-15.1-21.8-21.9-33.5-5.2-9.2-10.03-18.4-14.4-27.7zm345.5 16c-12.4 14.5-26.6 28.5-42.4 41.5.6 2.1 1.1 4.2 1.6 6.3 5.6 22.1 8.3 41.6 7.5 57.7 19.1-22.5 30.3-53.7 32.8-90 .4-5 .5-10.2.5-15.5zm-207.3 27.8c-24.6 11.4-48.2 20.7-69.9 27.7 15.6 18.1 32.5 33.8 50 46.7 21.6-2.4 44-7.5 66.7-15.4-15.4-16.9-31.2-36.8-46.8-59zM377 385.7c-10.6 7.7-21.8 15-33.5 21.8-11.8 6.8-23.7 12.8-35.7 18.2 15.7 15 30.2 25.9 42 31.7 11.3 5.5 18.9 6 23.6 3.9.6-.3 1.2-.7 1.7-1 4.1-3 7.5-9.8 8.4-22.4.9-13-1.3-31.1-6.5-52.2zm-238.3 7.4c-2.1.6-4.2 1.1-6.3 1.7-22.1 5.5-41.58 8.2-57.74 7.4 22.58 19.2 53.74 30.3 89.94 32.8 5.1.4 10.3.5 15.6.5-14.6-12.4-28.5-26.6-41.5-42.4zM289 433.3c-19.2 7.3-38.3 12.6-57.1 16.1 4.5 2.6 9.1 5.1 13.7 7.3 32.6 15.9 65.2 21.9 94.3 16.6-14.4-7.4-29.9-19.4-46.3-35.4-1.5-1.4-3.1-3-4.6-4.6zm-177.1 10.4c49.7 38.1 112.9 55.1 175 46.9-16.5-3.3-33.2-9.1-49.5-17.1-11.6-5.7-23.1-12.4-34.3-20.2-13.6 1.1-26.9 1.2-39.8.4-18.1-1.3-35.4-4.7-51.4-10z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMeshBallIcon })
);

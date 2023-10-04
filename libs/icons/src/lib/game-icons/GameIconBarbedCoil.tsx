import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBarbedCoilIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'barbed-coil'];
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
        d="M229.2 18.34l-6.1 5.71C179.4 64.68 108 67.31 49.08 63.27l-11.43-.78 1.53 11.35c3.18 23.53.14 49.36-6.97 71.46-3.67 11.4-8.49 21.8-13.85 30.3V205c13.92-12.5 24.52-31.8 31.64-53.9 1.84-5.8 3.42-11.7 4.74-17.7l54.06-3 5.3-47.84c28.9-1.87 58.2-7.39 84.3-19.84l39.5 32.35 27-30.09c17 7.66 35.6 12.29 54.4 12.1l13.3 37.22 37.5-2.1c2.6 4.8 5.5 9.5 8.6 14 8.2 12 18.5 22.6 31.6 30.5l-2.2 29.5 22 2.6c.7 11.3 2.4 22.2 5.7 32.6 3.4 10.5 8.5 20.5 15.7 29.4l-20.1 19.7 15.6 11.6c-19.6 25.2-25.9 52.4-22.9 77.6l-20.9 3.1 3.4 23.5c-25.5 7.2-48 24.8-60.7 47.5l-28-14.6L313 444c-21.5-3.4-44.9-2.8-66.5 4.9l-15.7-29-26 22c-11.7-13-26.3-23.1-41.8-30.5-10.7-5.2-21.7-9.1-32.8-11.9l10.5-42.4-37.5 6c1.5-9 2.3-18.4 2-28-.3-12.5-2.7-25.4-8.04-37.6l42.24-27.4-35.6-19.3c17.6-17 28.6-37.4 34.1-57.5l44.2 5.8-6.7-30.7c5.1-.2 10.2-.6 15.3-1.5 11.9-2 23.7-6.4 34.6-13.8l19.4 30.9 18.4-31.9c6.1 2.3 12.2 3.5 18.1 3.9 4.3.4 8.4.3 12.5-.1l6 37.2 24.9-18.4c4.7 6.5 10 11.8 15.8 16 4.2 3.1 8.5 5.6 13 7.7l-12.8 33.8 31.8-3.7c.5 5.1 1.7 9.8 3.4 14.2 1 2.7 2.3 5.4 3.6 7.9l-31.8 14.2 26.9 21.4c-3.2 4.8-5.8 9.8-7.7 15.2-2.2 6.7-3.3 13.7-3.4 20.9l-22.6-8.6 4 34.6c-3.1 1.4-6.1 2.9-9.1 4.6-4.8 2.7-9.5 5.8-13.8 9.4l-21.2-25.9-14.3 32.8c-10.6-2-21.2-1.4-31.1 1.6l-7.8-21.3-20.2 15.1c-7.6-7.8-16.3-14.1-25.3-19.2l20.1-28-37-2.8c1.3-7.5 1.8-15 .9-22.3l27.3-4.4-16.8-19.7c2.7-2 5.2-4.3 7.4-6.8 4.8-5.6 7.6-12.4 9-20.1 6.7 1.5 13.6 1.7 20.2-.2 7.8-2.1 14.8-6.8 20.7-13.4 12.9 10.7 27.1 19.2 42.1 23.4-1.7 6.1-2.8 12.5-2.4 19.2.3 5.5 1.7 11.1 4.3 16.5-10.6 1.6-21.1 4.8-31 10.5-8.8-14.5-21.9-25.3-43.1-29.1 12.7 21.9 26.7 43.4 28.4 69l13.8-16.3c14.4-13 30.4-16.5 49.2-16.7l22.3-.2-15.8-15.8c-7-6.9-9.1-12.6-9.5-19-.4-6.3 1.5-13.6 4.7-21.7l4.4-11.2-11.9-1.5c-16.4-2-34.6-12.6-50.6-27.6l-8.6-8.1-5.8 10.2c-4.7 8.1-10.4 12.2-16.2 13.8-5.7 1.6-12 .9-18.5-2.9l-13.9-8-.1 16c-.1 11.2-1.9 16.4-5.9 20.9-3.9 4.6-11.5 9.1-24.3 14.8l-10 4.4 5.9 9.1c11 17.4 7.7 36.3-3.6 60.3l-5 10.6 11.4 2.5c23.5 5.1 50.3 20.1 63.3 45.3l5.4 10.6 8.9-7.7c18.7-15.9 40.3-18.3 64.6-1.4l9.3 6.6 4.6-10.5c4.1-9.6 13.5-18.3 24.7-24.5 11.1-6.3 23.9-10 32.8-10.7l11.8-1-3.6-11.2c-5-15.1-5.1-27.8-1.4-38.8 3.8-11.1 11.7-20.9 24.8-29.8l8.2-5.5-6-7.9c-7.5-10-14.7-18.9-18.3-28.3-3.5-9.4-4.3-19.1 1.7-33.7l4.3-10.5-11.1-2.2c-14.1-2.9-26.7-6.7-36.7-14-10-7.3-18-18-23.1-37.3l-2.5-9.6-9.4 3c-10.7 3.5-22.3 6.5-33.9 5.7-11.5-.8-23.3-5.1-35.9-18l-7.8-7.8-6.4 8.9c-12.9 17.5-28 25.1-44.8 28-16.9 2.8-35.5.5-52.9-3.3l-12.4-2.6 1.1 12.5c2.6 32.6-14 81.4-65.48 104l-14.86 6.6 13.1 9.5c22.49 16.5 29.74 37.7 30.39 60.5.65 22.8-6.1 46.5-12.52 64.1l-4.71 13 13.76-.4c20.82-.6 48.02 4.4 71.82 15.8 23.7 11.5 43.7 29 52.5 53.2l4.5 12.2h1.9l8.9-8.7c32.3-31.2 84.1-27.8 119.2-14l10.6 4.1 2-11.2c6.5-36.1 49.2-67.6 88-61.8l18.1 2.7-8.5-16.3c-18.2-34.9-17.5-78.3 32.6-117.7l8.9-7V262l-9.5-6.4c-16.6-11-25.4-24-30.5-39.9-5.1-15.9-6-35-5-56.4l.4-7.6-7.4-1.9c-22.2-5.7-36.2-17.7-47.5-34.2-11.4-16.47-19.4-37.6-27.7-59.79l-3.6-9.52-9.2 4.34c-39 18.42-87.2.94-117.9-26.68l-6.3-5.6h-.2z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBarbedCoilIcon })
);

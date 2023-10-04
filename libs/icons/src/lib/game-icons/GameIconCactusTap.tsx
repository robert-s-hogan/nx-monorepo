import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCactusTapIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'cactus-tap'];
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
        d="M164.7 25.21c-3.8 0-7.6.36-11 1.12l8.2 21.01-16.8 6.54-7.4-18.95c-5.2 5.6-9.2 13.25-12.1 22.4-2.7-1.75-5.2-3.36-8.3-5.36-4.9-3.19-10-6.48-13.9-9.14-1.9-1.33-3.62-2.51-4.83-3.39-.92-.67-1.74-1.42-1.75-1.4 0 0 .1.11.28.32l-13.05 12.4c1.61 1.7 2.44 2.15 3.93 3.23 1.48 1.08 3.29 2.34 5.35 3.73 4.11 2.79 9.17 6.13 14.17 9.36 5.4 3.5 10.3 6.63 14 8.98-.1 1.04-.3 2.09-.4 3.15-2.3 20.02-1.1 43.29 1.7 65.29 2.3 18.7 5.8 36.3 9 50.5-5.6 0-10.6-.1-10.6-.1l-.2 18s6.3.1 12.9.1h2.2c2.2 8.7 3.8 13.9 3.8 13.9l3.8 12.5-13-.9c-15.6-1.1-27-8.7-31.85-19.3-4.9-10.6-4.54-22.3-3.66-34 .87-11.7 2.52-23.6 2.52-33.8 0-9.9-1.73-17.6-5.73-22.6-.65-.6-5.91-3-11.95-4.1l-17.3-25.69L47.79 109l14.05 20.9c-6.94 29.7-9.9 56.1-9.14 78.3l6.15-4.3 10.32 14.8-14.5 10.1c1.52 9.2 3.86 17.5 7.01 24.6 3.8 8.6 8.61 15.8 14.6 21.6L65.2 297.9l16.2 7.8 9.85-20.3c12.35 5.8 28.05 8 47.95 6.1l11.6-1-1.9 11.5c-3 17.9-5.1 34.6-6.2 50.5l13.1-6.3 7.8 16.2-22 10.6c-.2 7.2-.3 14.2-.2 21.2h-.6c-7.9-.3-15.5-.6-15.5-.6l-.8 18s7.7.3 15.7.6c.7 0 1.2 0 1.9.1 1.3 24.7 4.5 48.8 8.8 74.5l79.9-.5c7-29.2 10.7-61.1 12.1-94.1h-9.6c-11 0-20.2-6.2-25.1-14.3-5-8-6.7-17.6-6.4-27 .3-9.4 2.6-18.7 7.6-26.5 4.9-7.8 13.5-14.2 23.9-14.2h8.1c-.6-8.9-1.4-17.8-2.3-26.6 9.4 3.5 18.4 7.1 18.4 7.1l6.6-16.8s-9.4-3.7-19.2-7.4c-2.8-1-5.5-2-8.1-2.9-.7-4.9-1.3-9.6-2-14.4l-1.3-8.9 8.9-1.3c15-2.2 26.5-10.4 35.7-23.3 9.2-12.8 15.6-30.2 19.1-48.7 1.3-6.8 2.1-13.7 2.5-20.6l24 .9.8-18-24.5-1c-.2-7.3-.9-14.4-1.9-21l-8.8 4.1-7.6-16.32 12.3-5.77c-2.1-7.25-4.8-13.36-7.9-17.76-4.3-5.13-12.5-9.95-21-11.94-.2-.1-.5-.1-.7-.15-.1-10.58-.3-23.03-.3-27.5h-18c0 5.04.2 17.76.3 28.29-1.1.44-2.1.96-3 1.56-5.8 3.92-9.4 11.99-11 23.86-1.6 11.88-.9 26.63.1 40.93s2.5 28 1.9 39.2c-.4 5.7-1 10.8-3.6 15.7-2.5 4.9-8.9 9.2-15.1 9.1h-.7c-8.1-.9-15.3-4.4-19.8-10s-6.3-12.5-6.8-19.5c-1-14 2.6-29.9 6.3-46.5 3.7-16.56 7.7-33.69 8.5-47.99.8-14.3-1.5-24.68-8-30.77-6.1-5.81-17.3-10.03-28.4-10.57-.7 0-1.4-.1-2.1-.1zm87.8 72.02l18.6 37.47-16.2 8-18.6-37.5zm-98 22.27l14.6 10.4-12.9 18.1-14.6-10.4zm90.3 69.4l13.6 11.8-16.8 19.2-13.6-11.8zm-74.6.5l19 34.5-15.8 8.6-19-34.5zm-53.4 55.1l3.2 17.7c-8.3 1.6-22.45 3.9-32.63 5l-2.02-17.8c9.34-1.1 23.55-3.4 31.45-4.9zm164.5 1.7v18h39v30h18v-30h39v-18zm-116.1 13.6l29.3 12.3-7 16.6-29.3-12.3zm125.1 52.4v78h78v-78zm-57 16c-3.6 0-6.1 1.6-8.8 5.8-2.6 4.2-4.5 10.9-4.7 17.5-.2 6.6 1.3 13 3.7 17 2.5 3.9 4.8 5.7 9.8 5.7h39v-46zm153 1.6v45.9c8.6 1.2 15.8 3.6 21.4 9.1 6.1 6.2 8.4 14.5 9.5 24.4.9 7.8 1 17.6 1.1 29h45.9c-.2-42.4-1.8-70.2-13.9-85.4-6.6-8.1-16.4-14.2-33.2-18.4-8.5-2.1-18.7-3.6-30.8-4.6zm-199.4 91c0-.1 6.5 6.9 12 12.5 5.4 5.7 10.5 10.9 10.5 10.9l-12.8 12.6s-5.2-5.3-10.7-11c-5.4-5.6-10.4-10.6-12.8-13.6z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCactusTapIcon })
);

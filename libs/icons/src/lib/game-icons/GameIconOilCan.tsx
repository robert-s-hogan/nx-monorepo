import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconOilCanIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'oil-can'];
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
        d="M436.5 25.64c-18.3 0-35.4 6.52-45.1 20.58l-133 194.68c-3.7-1.6-7.2-2.6-10.9-2.7-1.6 2.4-1.5 3.9-.2 6.9 1.4 3.2 5.1 7.3 9.7 10.3 4.6 3 10.1 4.8 14.3 5 2.7.1 4.7-.4 6.3-1.4 0-.1-.1-.2-.1-.3-1-2.2-2.6-4.6-4.7-7L406.2 56.46c5.6-8.05 16.2-12.85 30.3-12.82 14.1 0 30.9 5.15 46.4 15.99l10.4-14.76c-18.3-12.79-38.5-19.19-56.8-19.23zM137.7 76.76c-4.8.1-7.1 1.39-8.9 3.35-3.8 3.93-5.4 14.09-3.6 24.09 3.7 19.4 9 40.2 17 57.3 8 17.2 18.5 30.3 32.4 36.5 15.9 9 27.2 23.5 32.1 38.6 1.1 3.6 2 7.3 2.7 10.9 4.3-5.8 9.8-11.6 16.9-16.9-.1-4.3-.5-8.5-1.3-12.6-1.9-9.2-5.7-17.1-16.2-23.7-25.9-16.2-36.2-45.6-41.9-70.3-2.9-12.4-4.6-23.8-6.1-32-.8-4.11-1.6-7.43-2.2-9.29-5.8-3.05-14.2-6.01-20.9-5.95zM119.5 185.1c-3 .1-13.6 4.6-24.89 13.4-11.29 8.8-24.02 21.2-35.71 34.8-11.68 13.6-22.34 28.3-29.7 41.6-7.36 13.4-10.96 25.5-10.43 31.7 1.9 25.3 21.77 43.7 39.24 49.5l11.44-15.3c-8.28-2.3-14.64-5.1-19.44-9.7-7.29-7.5-7.7-17.2-5.33-26.1 8.44-21.8 20.12-41.3 32.67-56.1 15.94-18.7 35.45-35.2 57.45-37.2 5.1-.4 10.1 1.7 13.5 4.6 3.4 2.9 5.7 6.5 7.8 10.4 4.2 7.9 7.3 17.6 10.5 27.9 6.4 20.5 13.4 43.7 21.6 53.6 27.8 27.5 52 32.8 67.8 29.6 15.5-3.1 22.9-13.7 22.4-22.5-.9-3-2.3-5.8-3.9-8.7-4.7 5.2-9.9 9.9-15 14.5-6.7 6.1-15.4 4.9-22.5 2.5-7.1-2.4-14-6.5-20.4-11.5-11.3-9-26.5-24.1-21.3-38.3-4.1-10.3-3.2-22.4-5.9-31.9-3.7-12.1-9.4-21.8-22.1-27.5h.1c-12.7-5.5-22.5-14.9-30.4-26-6.3-2.2-12.2-3.4-17.5-3.3zm110.7 65.5c-9.8 9.4-13.8 19.2-18.1 30 7.1 12.1 21.4 24.7 35.4 27.1 10.9-9.8 19.9-18.4 25.3-29.4-.7.1-1.4.1-2.1.1-8.4-.3-16.5-3.3-23.5-7.9-7-4.5-13-10.5-16.4-18.1zm-79.9 12.2-65.76 87.8c-7.83 10.7-15.87 21.2-23.78 31.7-6.06 10.1.78 22.5 5.7 30.4 8.93 14 24.64 29.8 42.34 43 17.5 13.1 37.2 23.7 53.2 28.2 9.8 2.4 24.3 5.2 30.8-3.2l91.4-122.3c-.7-4.6-1.6-9-2.6-13.1-6 4.9-13.5 8.5-22.1 10.2-67 1.1-96.7-37.5-109.2-92.7zm-3.9 47.2c19.6 37.9 64.7 59.6 93.6 65.4l-10.8 14.5c-31.9-7.3-67.8-21.7-93.1-66.1z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconOilCanIcon })
);

import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBastetIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'bastet'];
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
        d="M274 32.04c-10.7 12.23-16.5 26.91-16.9 39.87-.5 15.69 5.7 28.19 21 34.59l5.8 2.4-.2 6.2c-.5 15.3 11 34.3 28.1 46.9 17 12.5 38.2 18.3 55.7 12.1 10.3-5.5 22.4-12.9 29.8-21.1 7.3-8.2 10.3-15.3 5.9-26-3.5-4.3-8.8-7.4-18-11.6l-5.2-2.5v-5.8c0-3.4-4-11.44-14.8-18.45-10.8-6.97-27.6-12.84-49.3-13.86l-2.1-.1-1.8-.96c-14.2-7.68-22.2-15.89-27.8-24.35-3.8-5.76-6.6-11.31-10.2-17.34zm67.8 64.72c10.8.1 20.3 13.54 20.1 15.74-.3 4.1-34.9 5-34.9-.7 0-3.4 3.7-15.14 14.8-15.04zm-57.1 64.64l-.3 3.3c-.6 6.3-1.9 12.7-4.3 18.6 8.8 7.4 18.4 13.8 28.1 18.6 12.2 6.1 24.5 9.6 35.6 9.9-.9-5.9-1.2-11.8-.8-17.7-15.1-2-29.6-8.6-41.9-17.6-6-4.4-11.6-9.5-16.4-15.1zm-31.4 21.1c-2.2 4.4-4.8 8.3-7.7 11.8 36.2 42.5 81 59.9 112.7 61.7.2-8.2-.2-17.2-1.4-27.2-18.5 3.2-38.3-1.6-56.7-10.8-17.3-8.5-33.5-21-46.9-35.5zm-21.1 24c-4.1 2.7-8.3 5-12.4 7.1 32.1 44.7 74 70.9 127.1 85.2 4.5-6 7.8-14.4 9.7-24.9-37.3-2.1-85.4-21.8-124.4-67.4zm-24.5 21.1c-59.4 30.6-85.2 66-95.5 106.6-10.7 41.9-4 90.9 4 145l178.8.6c-.3-6.4-1.3-11-2.7-14.1-2-4.5-4.4-6.6-9.2-8.7-9.6-4.1-29.1-4.7-56.1-6.6l-21.9-1.6 16.6-14.2c13.6-11.6 24.3-22.8 32.8-33.8 3.6-7.9 4-19.4.9-31.9-3.9-16.2-13.4-33.3-24.2-43.4-5.5-5.1-11.1-8.3-16.2-9.5-5.1-1.2-9.6-.8-14.8 2.3-10.5 6.2-23.8 25.6-33 66.6l-17.6-4c9.8-43.2 23.5-67.5 41.4-78.1 6.8-4 14.1-5.6 21.2-5.3 2.4.1 4.7.4 7 1 9 2.1 17.1 7.2 24.2 13.8 14.2 13.2 24.8 32.7 29.5 52.4.2.9.4 1.9.6 2.8.9-2.4 1.8-4.8 2.5-7.2 1.4-4.5 2.5-9.1 3.3-13.8-11.8-21.5-14.7-46.6-16.7-66-20.6-14.1-38.9-31.6-54.9-52.9zm74.7 65.1c3.2 21.8 8.8 45.2 23.5 60.1l1.4 1.4.7 1.9c16 45 25.1 79 33.1 123.6l58.3.3c-1-8-3.7-13.4-7.5-17.5-5.1-5.4-13.1-9-24.2-10.8l-6.3-1-1.1-6.2c-8.1-42.3-24.1-79.5-18.7-128.3-21.2-5.8-41-13.5-59.2-23.5z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBastetIcon })
);

import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHouseKeysIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'house-keys'];
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
        d="M261.1 24.8c-6.3 0-12.7.43-19.2 1.18-34.6 4.01-64.8 17.59-86.1 37.06-21.4 19.48-34.2 45.56-31 73.16 2.8 24.6 17.8 45.2 39.1 59.4 2.6-6.2 5.9-11.9 9.2-16.5-17.6-11.6-28.4-27.3-30.4-45-2.3-19.7 6.7-39.58 24.8-56.14 18.2-16.57 45.3-29.06 76.6-32.68 31.3-3.63 60.6 2.33 82.1 14.3 21.4 11.98 34.7 29.31 37 48.92 2.2 19.3-6.2 38.8-23.4 55a69.91 69.91 0 0 0-35.4-10.6h-2.2c-5.1.1-10.1.7-15.3 1.8-37.5 8.7-60.8 45.5-52.2 82.7 5.3 23 21.6 40.6 42.2 48.5l39.7 172.2 47 29.1 29.5-46.7-23.5-14.5 14.8-23.4-23.5-14.6 14.7-23.3-23.5-14.6 14.8-23.4-13.5-58.4c15.1-16.1 22-39.1 16.7-62.2-2.7-11.7-8.2-22-15.8-30.4 18.9-19 29.8-43.5 26.8-69.2-3.2-27.55-21.6-50.04-46.9-64.11-20.5-11.45-45.8-17.77-73.1-17.59zm-20.2 135.5c-25.9 1.1-49.9 16.8-60.4 42.2-9.1 21.9-6 45.7 6.2 64.2l-67.8 163 21.3 51 51.2-20.9-10.7-25.5 25.6-10.4-10.6-25.5 25.6-10.4-10.7-25.5 25.6-10.5 22.8-54.8c-20.5-11.5-36.2-31.2-41.9-55.8-6.9-30.3 3.1-60.6 23.8-81.1zm58 7.2c8.9-.1 17.3 3.5 23.4 9.4-5.5 3.5-11.6 6.6-18 9.4-1.6-.6-3.3-.8-5.1-.8-.6 0-1.1 0-1.6.1-7 .8-12.2 6.1-13.1 12.7-.2 1-.2 2-.2 2.9.1.3.1.7.1 1 1 8.4 8.3 14.2 16.7 13.2 6.8-.8 12-5.9 13-12.3 6.2-2.8 12-5.9 17.5-9.4.2 1 .4 2 .5 3 2.1 18-11 34.5-29 36.6-17.9 2.1-34.5-11-36.5-29-2.1-18 11-34.5 29-36.6 1.1-.1 2.2-.2 3.3-.2z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHouseKeysIcon })
);

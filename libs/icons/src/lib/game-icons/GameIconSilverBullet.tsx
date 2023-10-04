import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSilverBulletIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'silver-bullet'];
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
        d="M265.8 18.05c-4.7 38.56-4.7 38.56-38.4 57.92 38.6 4.73 38.6 4.73 58 38.43 4.7-38.58 4.7-38.58 38.4-57.95-38.6-4.73-38.6-4.73-58-38.4zm206.3 20.59c-3.8 1.14-9 3.12-15.2 6.04-14.1 6.57-32.6 17.05-51.9 29-38.5 23.86-80.5 54.32-96.1 70.42l-.8.8-42 24.4c3.6 2.2 7 4.6 10.5 7.3 12.8 9.9 25.3 22.6 32 28.9l-12.2 13.2c-7.5-7-19.4-19.1-30.8-27.9-5.6-4.3-11.2-7.8-15-9.3-2.2-.8-3.3-1-3.8-1l-.8.5L60.57 366.2c3.35.5 6.73 1.4 10.09 2.5 14.85 4.9 30.54 14.9 44.84 29.2 14.2 14.2 24.2 29.9 29.2 44.7.6 1.9 1.2 3.8 1.6 5.8l183.3-183.3 36-58.6.7-.8c17.8-17.7 48.1-60.4 71.6-99.3 11.8-19.41 22-38.06 28.3-52.18 2.9-6.4 4.8-11.71 5.9-15.58zM438 153.2c4.1 31.3 4.1 31.3-18.4 53.5 31.4-4.2 31.4-4.2 53.5 18.2-4.2-31.2-4.2-31.2 18.1-53.4-31.1 4.1-31.1 4.1-53.2-18.3zM85.47 185.4c-16.43 30.2-16.43 30.2-50.41 35.3 30.18 16.5 30.18 16.5 35.3 50.4C86.79 241 86.79 241 120.7 235.8c-30.14-16.5-30.14-16.5-35.23-50.4zm333.03 55.2c-25.1 52-25.1 52-81.9 63.1 52.1 25.1 52.1 25.1 63.2 81.9 25.1-52.1 25.1-52.1 81.8-63.1-52-25.2-52-25.2-63.1-81.9zM52.38 383.5c-4.41 0-7.54 1.2-9.37 3-3.25 3.3-4.52 10.6-.78 22 3.82 11.3 12.45 25.2 24.89 37.7 12.45 12.4 26.31 21 37.68 24.8 11.4 3.8 18.7 2.5 22-.7 3.2-3.3 4.5-10.6.8-22-3.9-11.3-12.5-25.2-25-37.6-12.42-12.5-26.28-21.1-37.6-24.9-4.98-1.7-9.19-2.3-12.62-2.3zm166.12 28.4c3 25.2 3 25.2-15.4 42.9 25.3-3.1 25.3-3.1 43 15.3-3-25.3-3-25.3 15.2-42.9-25.2 3-25.2 3-42.8-15.3zM69.32 421a20.66 7.804 45 0 1 16.83 10.1 20.66 7.804 45 0 1 9.09 20.1 20.66 7.804 45 0 1-20.13-9.1 20.66 7.804 45 0 1-9.09-20.1 20.66 7.804 45 0 1 3.3-1z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSilverBulletIcon })
);

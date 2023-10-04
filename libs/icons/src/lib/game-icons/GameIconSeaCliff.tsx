import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSeaCliffIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'sea-cliff'];
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
        d="M494.2 76.94L316.5 91.73l1.4 17.97 177.7-14.82-1.4-17.94zm.8 36.86L324.2 128l11.3 34 43.5 7.5-37.6 10.1 27.5 82.6.2 3 38 31.1 57.1 16.5-69 .2-24.3-20.7 4.4 66.6 30.2 19.5-28.7 3.1 7.6 113.5H495V237.2l-44.2 13.2-45-8.4 38.4-7.5 50.8-25.2v-95.5zM245.4 255.2c-2.9 0-5.5.8-7.5 2.5-6.4 5.4 1.8 19.1 8.9 23.6 7.7 4.7 25 6.1 26.9-2.7 2.4-11-15.8-23.8-28.3-23.4zm34.8 18.4c14.2 23.5 33.4 45.7 39 71.3-20.6-14.3-53.4-15.5-85.4-17.6 23.7 20.6 50.2 35.6 78.5 47.1-20.3-5.3-39.7-11.9-64.5-11.5 14.6 23.4 35.8 47.1 64.3 62.1-1.9 1.4-3.8 2.9-5.6 4.3-10 7.8-18.4 13.7-26.5 13.7-7.9 0-16.4-6-26.4-14S232 411 216 411s-27.6 10-37.6 18-18.5 14-26.4 14c-7.9 0-16.4-6-26.4-14-10.1-8-21.7-18-37.6-18-15.95 0-32.12 9-45.66 17.3C28.8 436.7 18.39 445 18.39 445l11.22 14s9.66-7.7 22.16-15.3C64.26 436 80.1 429 88 429c7.87 0 16.3 6 26.4 14 10 8 21.6 18 37.6 18s27.6-10 37.6-18 18.5-14 26.4-14c7.9 0 16.4 6 26.4 14s21.6 18 37.6 18c15.8 0 27.5-9.6 37.6-17.5 10.1-8 18.7-14.2 26.8-14.5 4.5-.2 10.9 1 17.8 3.1l-7.9-117.9c-18.4-14.9-45.8-27.9-74.1-40.6zm-70 41.7c-4.5 0-8.7 1.7-10.1 5.3-1.9 5.2 5.4 11.1 10.1 11.7 5 .8 13.9-3.4 12.7-9.3-1-5-7-7.8-12.7-7.7zM192 338.2c-6.3-.1-13.8 3.9-13.5 9.3.3 4.9 8.8 7 13.1 5.8 4.6-1.1 10.7-7.7 7.4-12.1-1.5-2-4.2-2.9-7-3z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSeaCliffIcon })
);

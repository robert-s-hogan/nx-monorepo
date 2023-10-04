import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTreehouseIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'treehouse'];
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
        d="M246 39.29c-37.7-.24-76 18.71-85.2 53.61-46.2-32.1-139.01 45.9-68.26 95.2-93.627-5.8-103.35 116.9 43.86 70.8 15.9 18.7 43.8 30.1 73.9 34 1.1-.9 2.2-1.8 3.4-2.6-9.8-19.6-20-34.6-39.6-47h-46.8v-73.6L119 174l-19-37.1 125.9-64.4 125.9 64.4-19 37.1-8.3-4.3V186c12-12.2 28.4-16.7 43.7-14.5 24.1 3.6 46.9 24.4 45.7 61.1 16.7-3.1 28.7 1.1 36.6 8.4 5.3 4.8 8.9 11.4 10.7 18.7 31.3-22 14.3-64.8-37.6-60.5 14.8-55.7-39.5-107.6-95.8-98.4-6.8-41.85-44-61.28-81.8-61.51zM225.9 86.5l-109.1 55.8 7.6 14.9 101.5-52 101.5 52 7.6-14.9-109.1-55.8zm0 35.9-82 41.8v62.5h107.7c1.1-1.2 2.3-2.4 3.6-3.4 13.4-11.4 33.1-15.7 52.7-7.9v-51.2l-82-41.8zm-56.6 47.7h41.3v36h-41.3v-36zm71.9 0h41.3v36h-41.3v-36zm119.1 17.5c-17.4.3-34.3 14.1-36.6 42l-1.2 14.4-11.8-8.2c-16-11-33.6-9.3-44.7.2-11.1 9.4-15.3 26.2-5.8 44.5l5.5 10.4-11.6 1.7c-16.9 2.4-29.4 8.4-36.2 16.1-3.4 3.7-5.3 7.8-4.8 11.8.4 3.2 2.3 6.1 5.4 8.7 4.3 3.5 10.7 6.2 19.1 8 20.5 4.5 52.3 3.1 96.9-8.8l2.8-.7 2.7 1.1c40.2 17.4 72.5 22.4 96.1 20.2 14.4-1.3 25.4-5.3 32.4-10.8 5.3-4.1 8.2-9 7.6-14.1-.5-3.8-2.9-7.4-6.9-10.6-5.2-4.1-12.8-7.4-22.7-9.5l-11.2-2.3 5.6-9.9c7.1-12.7 7.8-29.8-1.7-38.6-6.3-5.8-16.9-6.9-32-1.6l-13.4 4.7 2.4-13.9c5.4-32.2-11-51.5-30.5-54.4-1.8-.3-3.6-.4-5.4-.4zm-151.4 55.7c11.2 10.6 20.6 22.5 27.4 36.2 1.6-.5 3.2-1 4.9-1.4-4.3-12.7-3.9-24.6-.1-34.8h-32.2zm128.2 102.4c-4.7 2.4-9.5 4.9-14.2 7.7-13 7.5-25.7 16.6-36.1 27.2 2.5-9.4 5.8-18.6 9.8-27.2-19.5 2.9-35.8 3.4-49 2.2-3.2 27.1-13 58.4-31.3 96.4l-2.6 5-5.8 1c-23.2 6-41.7 13-56.3 22h158.9l-28.4-24-.5-5c-1.2-10-1.4-21-.8-32h.2c8.2-22.1 28.9-38.8 50.3-51.2 9.3-5.4 18.7-10 27.6-13.8-7-2.4-14.3-5.1-21.8-8.3z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTreehouseIcon })
);

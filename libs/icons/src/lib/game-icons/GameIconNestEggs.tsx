import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconNestEggsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'nest-eggs'];
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
        d="M263.4 75.12c-13 0-24.4 6.3-34.8 17.96-10.3 11.62-18.9 28.52-24.6 47.62-8.6 28.5-10.4 61.8-4.8 88.8l65.8-9.4 62.9 7.4c5.2-26.6 3.3-59-5.1-86.8-5.7-19.1-14.3-36-24.6-47.62-10.4-11.66-21.8-17.96-34.8-17.96zm144 35.08c-11.6 0-21.9 5.7-31.3 16.5-9.3 10.8-17.2 26.6-22.4 44.4-1.9 6.6-3.5 13.4-4.7 20.3.4 12.5-.5 24.8-2.6 36.4 0 .6 0 1.2.1 1.9l29.9 3.5-61.9 10.9-49.3-5.8-168.44 24 83.54 30 109.2-18.6-106 54.1-115.68-61.3-28.93 4.1L47.3 302l-29.27-11.9 37.91 44.2 4.73 17.7 43.83 20.9 63.1-16.5-56.8 41.9-42.17-16.5 10.86 40.6 24.01 7-41.99 17.2 97.39.4-52.8 21.9 107.1-7.6c73.4 25.8 90.3 22.4 173.3 30.1l-68.2-25.5 24.3-12.6-57.9-39.6c77.9 24.1 107.9 16.5 183.6 2.3l-42.2-6.2 51.8-27 .4-12.7 27.5-57.6-26.3 18.6 1-29.4-63.2 51.5-113-34.4 116.2 7.9 60.1-28.9.5-14.1 16.1-40.9-30.6 19.1-37.1-4.3-77.4 8.7s22.1-6.9 42.9-13.2l21.6-15.2 50.5 5.9c3-23 .8-49.6-6-72.7-5.2-17.8-13.1-33.6-22.4-44.4-9.4-10.8-19.7-16.5-31.3-16.5zM139.6 121c-12.1 0-22.6 5.5-32.1 15.4-9.48 10-17.39 24.6-22.65 41-7.12 22.1-9.18 47.5-5.73 69.2l102.08-14.5c-5.3-25.4-4.3-54.1 1.5-80.9-3.3-5.6-7-10.6-11-14.8-9.5-9.9-20-15.4-32.1-15.4zm68.2 244.4l73.2 13.8 78-9-79.6 30.8z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconNestEggsIcon })
);

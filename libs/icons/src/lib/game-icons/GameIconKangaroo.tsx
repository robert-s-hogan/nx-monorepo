import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconKangarooIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'kangaroo'];
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
        d="M406.5 43.56c-2.8 0-5.3.53-7.2 1.56 2.7 19.56 4.6 24.05 20.1 34.39C398.5 118 412 129.5 305.1 116.2c-47.2-5.9-82.9 2.6-117.3 28.5-48.3 36.4-64.3 56.8-89.6 123.5-18.05 47.6.1 145.4-68.07 110.8-6.44-2.2-13.28-2.6-7.86 6.6 9.53 14.7 27.36 25.1 49.94 16 35.39-14.4 32.49-62.8 58.49-121.2 9-20.5 29.5-69.3 48.8-46.7 6.6 7.8 13.8 23.8 10.1 31.4-15.9 33.3-25.4 56.6-50.3 75.7 3.7 42.2 2.3 87.8-20.4 120.7l8.8 6.9c13.2-9.3 28.2-19 32.5-32.5 1-19.5 3.9-22 2.3-63.2 17.4-17.4 35.3-31.5 50.8-60.9 28.8-8.3 46.3-31.7 70.6-54.3 4.4-4.1 8.1-8.3 11.7-12.3 8-15.8 3.2-34.7-2.8-52.8 16 8.5 22.9 22.8 24.4 36.1 12.8-.6 23.5-1.9 34.6-5.3-3.5-18.7 2.9-31 18.3-43.9-9.1 24-12.2 30.4-4.8 39.3.1-.1.3-.2.4-.2 4.8 9.7 4.7 19.1 4.9 29.4-5.2 7.1-12.9 5.2-20 5.3l-15.4 19.5c13.3-1.7 51.6-9.4 51.8-15.4.8-16.6 4.4-34.4-1-49.8 10.3-7.6 19.7-18.6 27.5-29.4 11-15.4 14.4-28.3 26.7-49.9 2.6-4.6 32.5 7.5 38 5.8 8.7-2.7 14.3-6.4 13.4-15.8-.2-2.6-13.7-11.1-20.9-16.5 0 0 1.2-9.6-1.5-13.27-4.2-5.75-19.8-9.42-19.8-9.42-2.9-21.6-27.7-35.48-42.9-35.35zm52.4 47.7c2.9 0 5.2 2.26 5.2 5 0 2.78-2.3 4.94-5.2 4.94-2.9 0-5.2-2.16-5.2-4.94 0-2.74 2.3-4.98 5.2-5z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconKangarooIcon })
);

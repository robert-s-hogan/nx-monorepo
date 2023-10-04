import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconForestCampIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'forest-camp'];
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
        d="M350.5 33.05c-13.9 30.58-29.4 61.29-61.6 85.35 7.3 3.4 20.7 6.2 27.9 8.5-12.2 18.7-33 36.4-52 52.3 11.1 5.7 22.1 10.3 33.1 14-14.1 22.2-30.9 43.3-51.9 62.4 16.7 9.3 33.3 16.6 49.8 21.8-17.9 25.4-40.4 49.6-72.1 76.1 51.5 26.5 97 38.8 142.2 37.4 1.8 0 3.7.1 5.5.1v-.3c39.9-2.2 79.6-15 123.2-38-38.8-24.5-62.9-47.7-81.4-73.2 17.8-5.2 35.6-12.9 53.3-23.1-25.8-17.7-44.2-38.6-58.9-61.5 12.1-3.7 24.1-8.7 36.1-15-23.2-14.6-44.1-32.3-56.7-51.4 8.8-2.4 22.8-5.3 31.5-9.4-38.5-21.76-48.9-53.16-68-86.05zM173.6 336.8c-.1.3-.4.8-.6 1.1l19.4 139 72.2 1.2c-38.2-44.9-66-91.1-91-141.3zm-.6 1.2c-23.8 47.8-44.8 94.2-86.44 137.2l76.84 1.3zm-20.7 1.1c-24.1 8.9-54.17 16.9-82.31 15.8-11.18 39.8-26.38 80-52.57 115.8l46.65 1.6c43.13-40.8 64.23-85 88.23-133.2zm186.5 68.8l-2.7 70.4 43 .6L373 409c-11.6 0-23.1-.3-34.2-1.1z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconForestCampIcon })
);

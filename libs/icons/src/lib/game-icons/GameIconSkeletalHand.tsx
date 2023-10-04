import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSkeletalHandIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'skeletal-hand'];
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
        d="M237.5 34.83c-.8 16.4.4 18.5 1.3 32.3 9.3-2.57 19.1-2.28 27.8-.2 1.2-14.6.4-25.7-1.8-32.6-8.8-14.67-21.3-19.44-27.3.5zM136 59.23c-.1 11.8.6 16.4 1.5 23.1 10.1-3.67 19.5-4.81 29-3.4-.3-9.2-1.4-16.3-3.2-21.2-8.9-14.06-21.5-18.62-27.3 1.5zm231.2 1.8c-3.9 12.7-4.2 16.7-5.5 25 9.7-.17 20.3 3.07 27.8 7.2 3.3-11 4.7-19.9 4.3-26.1-3.2-16.59-16-22.53-26.6-6.1zM237 87.53c4 16.67 9.1 35.37.9 56.07 10.2-4 20.8-4.4 30.5-1.5-4.7-18.2-4.8-36.5-1.1-55.87-10-3.21-21.4-3.31-30.3 1.3zm-97.5 14.27c13.2 12.8-.5 56.2 5 60.1 10.1-5.3 21-6.9 31.6-4.6-7.1-18.8-8.9-38.2-6.4-58.97-9.8-2.72-21.8-1.84-30.2 3.47zm-93.7 11.6c1.7 10.7 3 15.3 4.7 20.9 8.7-5 18.7-7.1 28.49-6.7-1.73-8.9-3.99-15.6-6.49-20.1-9.56-15.42-25.07-10.78-26.7 5.9zm309.6-8.3c-.7 16.8-.7 35.8-13.2 53.2.4 0 .8-.1 1.2-.1 10-.2 19.9 2.7 27.8 7.6.2-18.6 5-36.3 13.7-53.9-9.7-5.2-19.2-9.3-29.5-6.8zM54.5 153.9c6.8 14.6 15 30.6 12.9 50.4 8.74-4.9 18.49-6.6 27.95-5.7-7.67-16.1-11.2-33.3-11.5-52.2-9.6-.8-22.27 1.9-29.35 7.5zm183 11.4c5.1 27.4 12.2 55.7 4.1 86.8 12.2-4.8 26.2-1.3 35.9 5.6-7.1-30.3-7.9-60.4-3.7-93.2-12.2-7.8-26.6-8.6-36.3.8zm-91.6 19c13.4 34.9 14 64.5 15.9 93.9 11.5-9.8 22.2-13.1 35.7-9.1-10.7-28.7-15.4-58.1-15.7-90.8-12.5-6.2-27.5-5-35.9 6zm188.3-5.5c6.3 33.2-18.4 68.1-18.6 91.2 11.2-1.4 22.6 3.9 29.9 11.1 2.1-.3 4-.9 5.7-1.6-.9-31.9 5.4-61.3 18.1-92.1-9.9-9.5-22.8-14.6-35.1-8.6zM70.7 224.9c13.1 24.3 25.3 56 25.96 72.6 7.74-7.3 17.84-10.6 27.64-10.1.4 0 .7.1 1 .1-13.4-21.4-21.4-44.1-25.77-69.8-10.05-2.7-22.37-1-28.83 7.2zM439 241.8c-1.5 6.2-2.2 10.3-2.8 13.8 11.1 1.1 20.4 5.1 28.2 11.7 1.7-8.8 2.2-15.8 1.5-20.9-2.9-18.2-16.7-23.2-26.9-4.6zm-202.1 36.9c2.2 24.1 5.2 48.1 5.3 72.6 9-1.2 18-1.4 26.4-.9.2-23 2-46.6 5.3-71.4-13.8-14.3-26.4-15.4-37-.3zm191.5-4.4c-5.7 19.1-10.7 39.4-22.5 57.7 10 5.6 17.3 12.6 21.7 21.9 7.3-22.2 18.3-42.8 33-63.2-7.3-11.6-19.2-19.6-32.2-16.4zm-259.8 25.8c5.8 24.6 12.4 48.9 16.2 74.3 7.8-6.2 17-11.4 24.8-14.6-2.5-21-4-42.6-4.4-65.5-16.1-13.1-28.7-11.4-36.6 5.8zm135.5-5.6c-3.5 20.2-6.3 40.6-10.9 60.7 9 3.1 17.1 7.4 24.3 12.6 5.9-21 13.3-41.9 22.2-63.5-9.8-17.7-21.7-21.9-35.6-9.8zm-201.3 29c13.1 24.9 27.3 49.4 37.3 76.7 7.4-6.4 14.5-11.2 22.7-15-10.1-23.7-18.5-48.6-25.7-75.5-17-8.2-30.3-4.6-34.3 13.8zm291.8 23.4c-22.3 28.3-46.1 40.1-71.8 49.6 9.7 8 17.3 18.4 23 28.9 19.4-20.5 41.9-35.8 69-48.5-.6-13.5-8.2-26.4-20.2-30zm-133.1 21.4c-18.6.1-39 5.1-53.5 12.4 8.7 2.7 16.3 7.8 22.7 14.2 2.9-.1 5.9.1 8.8.6 29.4-13.7 57.9-18.8 82.4.3-20.5-18.3-35.8-27.5-60.4-27.5zm-96.8 36.1c-11.2 6.4-20.5 16.1-24.5 25.8-.9 17.4 5 31.6 13.5 46.3 4.6 5.8 18.3 9.7 33.5 1.1-5.2-13.8-10.3-32.2-6.6-43.7 7.2-15.2 16.1-25.7 29-32.9-14.3-8.2-32-3.8-44.9 3.4zm94.2 1.7c3.2 3.2 6.1 6.8 8.6 10.6 6.6 9.9 11.1 21.5 13.6 32.3 1.7 11.5.5 22.1-1.8 32.2-1 9.3 38.5 14.4 58.8 1.5.8-12 2.1-25.8-2.6-37.5-8.1-18.8-22.7-39-41.2-43.4-11.6-2.7-25.5.3-35.4 4.3zm-26.2 6.8c-6.7.4-13.7 3.2-18.3 6.2-18.6 14.3-19.8 25.3-13 45.3 7.7 26.9 58 25.2 61.1 9.3 3.6-17.7-.9-33.2-10-47.1-5.6-6.9-11.2-13.7-19.8-13.7z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSkeletalHandIcon })
);

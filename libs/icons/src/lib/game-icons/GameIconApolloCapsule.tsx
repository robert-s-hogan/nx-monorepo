import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconApolloCapsuleIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'apollo-capsule'];
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
        d="M256 41.19c-22.9 0-47.1 11.76-67.6 28.16-15.2 12.16-28.2 26.81-37.1 39.95h209.4c-8.9-13.14-22-27.8-37.2-39.95-20.5-16.4-44.7-28.16-67.5-28.16zM140.5 127.3c-3.8 5.9-29.6 46.6-57.49 94.5-15.01 25.8-30.02 52.6-41.16 74.8-5.58 11.2-10.19 21.2-13.32 29.3-3.13 8-4.57 14.5-4.57 16.2 0 38.2 31 70.2 76.74 93 45.8 22.9 105.1 35.7 155.3 35.7 50.1 0 109.4-12.8 155.2-35.7 45.8-22.8 76.8-54.8 76.8-93 0-9.4-6.9-29.9-17.9-52.9-11.1-22.9-26.1-49.1-41-73.7-27.9-45.8-53.6-82.8-57.4-88.2H140.5zm6.8 12.7l42 20.9h133.4l41.9-20.9 21.8 65.6-38.1 57.2v.3c1.6 12.2 2.7 21.5 2.7 27.3v9H160.9v-9c0-5.8 1.1-15.1 2.8-27.3v-.2l-38.1-57.3 21.7-65.6zm10.6 25.4L145.4 203l19.9 29.9 11.6-58-19-9.5zm196.1 0l-18.9 9.5 11.5 58 20-29.9-12.6-37.6zm-159.2 13.5c-1 5.8-3.7 22.2-7.4 46.2-2.1 13.9-4.3 28.4-5.9 40.4-.8 6-1.4 11.5-1.9 15.9h152.7c-.5-4.4-1.1-9.9-1.9-15.9-1.6-12-3.7-26.5-5.9-40.4-3.6-24-6.3-40.4-7.3-46.2H194.8zm61.2 17.5c18.5 0 33.8 15.3 33.8 33.8 0 18.5-15.3 33.8-33.8 33.8-18.5 0-33.8-15.3-33.8-33.8 0-18.5 15.3-33.8 33.8-33.8zm0 18.1c-8.8 0-15.7 6.9-15.7 15.7 0 8.8 6.9 15.7 15.7 15.7 8.8 0 15.7-6.9 15.7-15.7 0-8.8-6.9-15.7-15.7-15.7zm-131.1 38.2l16.8 6.6-34.5 86.1-16.71-6.6 34.41-86.1zm262.2 0l34.4 86.1-16.8 6.6-34.4-86.1 16.8-6.6zm-226 87.6l17.6 3.6-17.3 86-17.6-3.6 17.3-86zm189.7 0l17.3 86-17.6 3.6-17.3-86 17.6-3.6z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconApolloCapsuleIcon })
);

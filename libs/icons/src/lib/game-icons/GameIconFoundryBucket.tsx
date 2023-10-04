import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFoundryBucketIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'foundry-bucket'];
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
        d="M137 19v200.9c7-3.1 14.8-4.9 23-4.9s16 1.8 23 4.9V19h-46zm64 88.6v65L340.4 312c10.1-13.9 19-27.2 26.2-38.8L201 107.6zm161.6 18.2c-34.5.2-76.9 14-93.3 24.7l115.2 115.1 4.9 5-.1.2c21.3 43.6 27.5 142.4 19.5 184-25.1-12.6-50.9-53.2-66.2-72.7-.4 20.5 6.5 63 16.9 82.2-34.9-5.3-57.1-28.1-81.2-48.3 3.4 24.3 16 40.9 41.7 57.8L208 464l69.3 32H496V384l-32 72.3c6.7-75.3 4.8-304.9-76.8-327.7-7.3-2-15.7-2.9-24.6-2.8zM119 158.5c-6.4 5.5-12.8 11.1-19.1 16.9-32.97 30.3-61.57 64.5-73.33 94.4L199.2 442.4c29.9-11.7 64.1-40.3 94.4-73.3 12.8-13.8 24.8-28.3 35.8-42.5L201 198.2v34.3c9.9 10.2 16 24.2 16 39.5 0 31.4-25.6 57-57 57s-57-25.6-57-57c0-15.3 6.1-29.3 16-39.5v-74zm41 74.5c-21.6 0-39 17.4-39 39s17.4 39 39 39 39-17.4 39-39-17.4-39-39-39zm0 23a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFoundryBucketIcon })
);

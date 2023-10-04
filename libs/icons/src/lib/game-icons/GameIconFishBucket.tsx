import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFishBucketIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'fish-bucket'];
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
        d="M343.1 25.7c.5 31.23 14.5 58.24 38.1 88.1l4.1 5.2-43.9 64H402l12.6-52.9 6.4-.7c18.7-1.9 41-10.2 60-19.9 7.1-3.7 13.6-7.5 19.6-11.3-4.2 0-7.4.13-12.2 0-22.4-.61-48.7-2.52-67.4-10.26-20.4-8.51-42.6-27.79-60.7-45.05-6.6-6.31-12.3-12.04-17.2-17.19zM74.93 26.9C55.54 74.74 74.44 140.8 98.75 183H119c-.8-2.4-1.2-4.9-1.2-7.5 0-13.7 11.3-25 25-25s25 11.3 25 25c0 2.6-.4 5.1-1.2 7.5h60.7c-16-37.2-41.8-82.7-82.8-116.96 5.1 19.17 12.2 37.76 23.8 55.56l-15.2 9.8c-17.2-26.6-25.3-54.39-30.9-81.78C108 40.49 92.3 32.73 74.93 26.9zm67.87 141.6c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7zM89 201v30h196.5c1.7-5.8 3.3-11.7 5-17.6l17.4 4.8c-1.2 4.3-2.4 8.5-3.6 12.8H423v-30H89zm17.8 48l31.5 167.5c47.8-19.6 78.6-46.8 100.7-78.7 18.5-26.7 30.8-57 40.9-88.8H106.8zm192.1 0c-10.7 34.6-24 68.5-45.2 99.1-24.4 35.1-59.5 65.5-112.1 86.4l9.9 52.5h209l44.7-238H298.9z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFishBucketIcon })
);

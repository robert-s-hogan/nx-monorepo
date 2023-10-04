import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBallistaIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'ballista'];
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
        d="M58.076 315.052l24.923 23.666-20.873 7.685-40.947-38.87 13.729-14.465.633.602 10.24 25.64zm212.883-27.218c-32.144 11.865-49.901 46.32-40.914 79.375 8.987 33.053 41.738 53.748 75.463 47.709 33.725-6.04 57.258-36.815 54.215-70.933-3.043-34.12-31.654-60.27-65.918-60.243a66.2 66.2 0 0 0-22.846 4.092zm81 3.115l-10.894-29.575-24.341 8.962a82.941 82.941 0 0 1 35.255 20.644zM224.851 304.2L30.858 375.636l14.34 39.015 165.884-61.082a83.076 83.076 0 0 1 13.77-49.368zm246.84-46.574L457.32 218.6l-33.085 12.202 14.372 39.025zm19.129-133.348l-54.754-2.415 11.59 9.086-53.564 21.486 6.995 17.552 53.937-21.631-2.15 14.538zM202.255 229.161L52.368 293.996l2.966 6.43 153.484-55.023a32.909 32.909 0 0 1-6.553-16.294zM356.88 96l-51.923 19.128 11.994 32.577 23.656-11.268 16.429-7.82 6.303 17.063 21.029 56.949 6.303 17.061-17.57 4.736-25.38 6.833 40.167 109.162 51.923-19.128zm11.88 112.392l-124.252 33.5c-2.092.569-4.25.858-6.417.863-8.308 0-15.743-4.424-18.402-11.642-3.333-9.034 1.787-19.533 11.86-24.33l116.182-55.34zm-126.401 16.2c-.53-5.94-7.973-8.276-11.804-3.708-3.83 4.569-.233 11.49 5.708 10.977a6.698 6.698 0 0 0 6.096-7.27z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBallistaIcon })
);

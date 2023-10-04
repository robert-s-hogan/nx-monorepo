import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTearTracksIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'tear-tracks'];
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
        d="M255.938 18.22c-42.195 0-80.92 25.056-109.782 67.75-28.862 42.692-47.312 102.834-47.312 169.06 0 66.228 18.45 125.715 47.312 168.407 8.205 12.137 17.224 22.822 26.875 31.938V345.062c-1.848-68.64-15.293-95.28-56.374-95.28 0-33.167 45.555-52.78 82.563-52.313 25.32.32 46.655 10.066 46.655 31.28-34.76 19.23-50.127 40.276-54.156 97.625V470.5c19.73 13.406 41.468 20.688 64.218 20.688 22.727 0 44.44-7.276 64.156-20.657V325.97c-4.074-57.04-19.45-78.038-54.125-97.22 0-21.214 21.334-30.96 46.655-31.28 37.008-.47 82.563 19.145 82.563 52.31-41.08 0-54.526 26.64-56.375 95.282v110.375c9.675-9.128 18.683-19.837 26.906-32 28.86-42.692 47.342-102.18 47.342-168.406s-18.48-126.368-47.343-169.06c-28.863-42.694-67.588-67.75-109.783-67.75zm-78.344 194.56c-12.51 0-22.656 10.147-22.656 22.657s10.146 22.657 22.656 22.657c12.51 0 22.656-10.146 22.656-22.656 0-12.51-10.146-22.657-22.656-22.657zm156.656 0c-12.51 0-22.656 10.147-22.656 22.657s10.146 22.657 22.656 22.657c12.51 0 22.625-10.146 22.625-22.656 0-12.51-10.115-22.657-22.625-22.657z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTearTracksIcon })
);

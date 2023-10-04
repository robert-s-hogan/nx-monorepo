import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBowieKnifeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'bowie-knife'];
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
        d="M59.938 17.75L15.78 61.906l32.064 32.032L92 49.78 59.937 17.75zM93.218 75L74.376 93.844c17.814 31.92 50.57 65.266 80.78 83.812l21.72-21.72C157.975 125.16 124.423 92.678 93.22 75zM240 119.25L112.812 246.438l13.313 13.312 127.188-127.188L240 119.25zm4.938 48.844l-74.97 74.97 11.97 11.967c5.18-4.87 11.826-7.28 18.468-7.28 6.903 0 13.8 2.61 19.063 7.875 10.32 10.324 10.515 26.965.593 37.53l132.718 132.72c35.123 35.124 93.42 77.742 141.72 66.75-23.436-21.284-81.765-106.71-71.656-146.188l-40.688 7.25 7.656-40.062-40.562 7.156 8.094-39.592-40.063 7.625 7.626-40.063-40.53 7.156 7.75-40.625-47.188-47.186z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBowieKnifeIcon })
);

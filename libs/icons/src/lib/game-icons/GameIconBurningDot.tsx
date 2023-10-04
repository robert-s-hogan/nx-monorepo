import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBurningDotIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'burning-dot'];
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
        d="M53.813 48.094c69.06 40.8 122.263 96.67 124.937 153.312-49.83.664-72.508-14.408-101.97-51 17.725 93.07 55.393 143.855 100.72 156.563-22.006 26.968-60.902 30.456-97.625 25.342 35.897 33.924 95.12 70.913 149.094 84.75-17.05 15.34-38.742 24.516-68 29.157 269.316 114.287 386.556 10.27 295.217-277.376-12.035 25.526-29.11 41.112-60.343 57.5-7.906-55.298-31.41-152.12-95.656-171.75 24.362 41.713 21.98 99.445-4 138.937C268.363 122.72 161.85 54.283 53.813 48.095zm308.28 236.656c26.127-.13 52.073 11.014 70.157 32.72 32.15 38.584 26.96 95.63-11.625 127.78-38.586 32.15-95.632 26.96-127.78-11.625-32.15-38.586-26.962-95.632 11.624-127.78 16.88-14.067 37.303-20.994 57.624-21.095z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBurningDotIcon })
);

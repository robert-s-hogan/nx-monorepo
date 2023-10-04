import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBrokenBoneIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'broken-bone'];
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
        d="M301.486 20.37l-33.19 134.755 15.306 49.895 43.55-103.81-25.666-80.84zM161.324 43.46l2.03 110.69 90.68 36.516-92.71-147.207zm180.358 126.73l-29.532 40.572 85.268-39.008-55.736-1.563zm-99.346 39.134c-59.628 41.982-124.36 74.982-199.207 81.297-13.185 1.113-21.704 8.3-26.302 15.185-13.788 20.652 8.285 51.02 54.332 33.37-55.518 33.324-8.274 81.184 25.113 43.495 34.24-38.648 74.95-74.53 117.74-91.58l12.696-28.235-32.81 6.272 48.436-59.803zm59.62 21.973l120.356 61.736-8.443-53.13-111.913-8.606zm-19.214 25.398l5.78 34.688-40.055-13.627c70.405 49.457 118.18 111.73 161.883 190.79 22.65 40.976 71.903 6.46 34.275-34.278 41.4 33.974 78.094-24.99 40.883-40.883-63.653-27.187-118.033-62.682-150.73-109.434h-.003l-52.033-27.255zm-53.697 46.844v.003l.002-.004h-.002zm0 .003l-60.248 79.27 46.773-10.303 13.475-68.967zm18.963.934l18.996 118.392 36.414-19.62-55.41-98.773z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBrokenBoneIcon })
);

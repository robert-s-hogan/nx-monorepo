import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTripleClawsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'triple-claws'];
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
        d="M280.762 21.63c-15.912-.117-32 1.523-47.983 5.08-42.948 9.563-58.997 38.668-57.135 66.495 9.325.534 19.01 1.876 28.914 3.988 28.983 6.18 59.948 19.074 89.05 38.418 100.28-25.29 162.228 51.005 184.7 152.18 49.7-147.744-67.984-265.215-197.548-266.16zm-112.535 90.128c-16.8-.114-31.245 2.938-41.717 8.74l-.04-.074c-14.14 7.645-23.816 19.428-29.15 32.687 14.63 4.844 28.782 13.83 41.955 25.466 17.72 15.652 33.85 36.317 47.06 59.662 116.927 2.378 161.504 103.39 150.673 215.26 79.5-106.87 42.174-229.74-43.856-295.404-29.984-21.936-62.82-36.296-92.492-42.623-11.425-2.436-22.354-3.644-32.433-3.712zM75.29 167.963C21.077 166.605-10.09 248.77 47.966 276.21c104.435 49.363 94.912 140.96 34.844 222.71 115.134-47.87 134.337-172.24 81.997-260.066l.152-.01c-11.28-18.202-24.378-34.178-38.056-46.26-14.62-12.914-29.74-21.183-43.76-23.836-2.664-.454-5.287-.72-7.855-.785z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTripleClawsIcon })
);

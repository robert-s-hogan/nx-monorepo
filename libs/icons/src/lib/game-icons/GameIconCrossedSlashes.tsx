import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCrossedSlashesIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'crossed-slashes'];
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
        d="M174.844 14.875c47.1 42.275 78.124 90.35 95.312 138.063C200.613 126.285 119.028 114.165 32 129.155c96.11-8.437 180.524 13 245.625 47.72 43.035 161.78-70.46 307.352-250.97 192.155 112.67 95.877 201.475 101.817 254.94 60.908 307.477 77.54 238.903-156.1 27.374-260.094-25.886-55.805-69.74-110.694-134.126-154.97zM323 205.345c123.386 90.75 139.423 227.623-38.656 222.436C336.51 385.317 353.196 296.868 323 205.345z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCrossedSlashesIcon })
);

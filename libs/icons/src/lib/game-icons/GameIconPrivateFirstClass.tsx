import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPrivateFirstClassIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'private-first-class'];
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
        d="M255.977 121.95C226.38 169.626 161.382 247.503 106 286.446v52.48c38 29.073 86 51.098 150 51.124 64 .027 112-22.05 150-51.124V286.51c-56.388-38.936-120.655-116.947-150.023-164.56zm.023 57.523l9.44 14.158c27.838 41.76 66.42 83.7 107.26 118.774-46.064 25.842-81.895 37.647-116.7 37.647-34.718 0-70.455-11.744-116.352-37.45 40.87-35.015 79.02-77.128 106.913-118.97l9.44-14.157z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPrivateFirstClassIcon })
);

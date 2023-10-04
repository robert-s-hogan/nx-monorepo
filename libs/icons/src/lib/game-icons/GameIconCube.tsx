import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCubeIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'cube'];
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
        d="M256 24.585L51.47 118.989 256 213.394l204.53-94.405zM38.998 133.054v258.353L247 487.415V229.063zm434.004 0L265 229.062v258.353l208.002-96.008z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCubeIcon })
);

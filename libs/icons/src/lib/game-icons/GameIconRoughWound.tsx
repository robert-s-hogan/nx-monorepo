import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconRoughWoundIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'rough-wound'];
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
        d="M378.744 133.25c-238.248 24.048-68.733 98.574 81.488 161.753-254.586-53.513-69.623 96.14 22.624 194.884-97.054-61.694-215.83-120.378-320.06-142.827 234.825-17.035 26.77-138.346-134.27-172.088 185.74-1.445 164.326-12.097 8.96-152.757 131.684 75.394 215.833 97.65 341.26 111.038z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconRoughWoundIcon })
);

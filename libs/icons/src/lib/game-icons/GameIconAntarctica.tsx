import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAntarcticaIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'antarctica'];
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
        d="M130.458 203.435L226.656 58.38 448 107.084v92.378l40.823 49.164-13.937 107.434-67.182 85.268L281.328 448 288 352l-64-48-23.835 80L112 352l-36.342-77.936 13.39-71.775-54.041-27.343L24.779 112l24.384 49.054L112 176z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAntarcticaIcon })
);

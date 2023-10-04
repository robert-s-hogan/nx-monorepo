import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHeartMinusIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'heart-minus'];
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
        d="M372.48 31.215c-77.65 0-116.48 65.73-116.48 65.73s-38.83-65.72-116.48-65.72c-37.14 0-107.77 33.72-107.77 125.13 0 161.24 224.25 324.43 224.25 324.43s224.25-163.19 224.25-324.43c0-91.42-70.63-125.13-107.77-125.14zM146.924 225.65h220v60.7h-220z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHeartMinusIcon })
);

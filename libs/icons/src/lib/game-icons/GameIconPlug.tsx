import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPlugIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'plug'];
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
        d="M382.957 22.023c-2.618.033-5.138.96-7.26 3.082l-67.88 67.883 22.627 22.627 67.882-67.883c5.657-5.657 2.83-14.142-2.828-19.8-3.535-3.534-8.177-5.964-12.54-5.91zm-131.71 37.023l-21.92 21.92 203.648 203.647 21.92-21.92-11.315-11.315L262.56 70.36 251.25 59.047zm-23.335 45.96l-55.86 55.863v90.508l-22.628 22.63c-11.314 11.313-11.315 33.94.092 45.347l45.164 45.162c11.314 11.314 33.94 11.314 45.254 0l22.627-22.63h90.51l55.862-55.86-181.02-181.02zm245.555 7.527c-2.62.033-5.138.96-7.26 3.082l-67.88 67.883 22.626 22.626 67.883-67.882c5.657-5.657 2.83-14.142-2.828-19.8-3.536-3.535-8.177-5.965-12.54-5.91zM148.08 349.25l-128 128 12.727 12.728 128-128-12.727-12.727z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPlugIcon })
);

import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCarBatteryIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'car-battery'];
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
        d="M73 81v46h46V81H73zm320 0v46h46V81h-46zM25 145v16h462v-16H25zm0 34v252h462V179H25zm382 21h18v23h23v18h-23v23h-18v-23h-23v-18h23v-23zM64 223h64v18H64v-18z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCarBatteryIcon })
);

import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconMooringBollardIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'mooring-bollard'];
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
        d="M192 41c-13 0-27.2 6.75-39.5 17.73-12.4 10.97-22.6 25.97-28.1 40.43-5.4 14.44-5.7 27.84-1 36.54S138 151 160 151h192c22 0 31.9-6.6 36.6-15.3 4.7-8.7 4.4-22.1-1-36.54-5.5-14.46-15.7-29.46-28.1-40.43C347.2 47.75 333 41 320 41H192zm-23 128v270h174V169H169zM32 254v36h119v-36H32zm329 0v36h119v-36H361zM87 432v25H73v30h366v-30h-14v-25h-18v25H105v-25H87z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconMooringBollardIcon })
);

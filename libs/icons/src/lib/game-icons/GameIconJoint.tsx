import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconJointIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'joint'];
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
        d="M18 18v50.31l45.38 45.38C136 190 126.54 263.74 155.51 287.91a50.35 50.35 0 0 0 32.35 11.6 51.48 51.48 0 0 0 51.47-47.26 14 14 0 0 1 12.92-12.92 51.27 51.27 0 0 0 33.93-16.74c16.99-18.71 18.25-47.94 1.73-67.07-28.8-33.36-83.82-15.7-174.22-92.13L68.3 18H18zm298.16 165.96c.1 1.91.13 3.82.07 5.75a68.72 68.72 0 0 1-17.73 44 67.89 67.89 0 0 1-42.8 21.99 68.11 68.11 0 0 1-67.83 60.44c-1.35 0-2.7-.06-4-.14.32.4.65.81 1 1.2 28.8 33.36 83.82 15.7 174.22 92.13L443.71 494H494v-50.314L409.33 359c-72.63-76.33-63.16-150-92.12-174.2-.34-.29-.7-.56-1.05-.84z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconJointIcon })
);

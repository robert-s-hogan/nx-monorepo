import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconClawIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'claw'];
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
        d="M256 16C106 76 46 226 46 226c0 45 60 90 90 90 90 0 180-195 135-285l-15-15zm45 15c30 60 0 135 0 135 120 30 120 180 75 330 75-75 90-150 90-210 0-90-15-225-165-255z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconClawIcon })
);

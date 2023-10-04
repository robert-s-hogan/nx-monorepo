import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconConcentrationOrbIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'concentration-orb'];
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
        d="M163.5 17.75c-125.028 2.135-223.03 231.994-9.188 461.625-197.34-240.608 9.41-548.496 174.157-289.03C287.353 66.332 222.42 16.744 163.5 17.75zm201.78 4.656c197.34 240.608-9.41 548.528-174.155 289.063C319.482 698.622 679.9 360.254 365.28 22.405zm-98.31 155.75c-42.422 0-76.814 34.392-76.814 76.813 0 42.42 34.392 76.81 76.813 76.81 42.42 0 76.81-34.39 76.81-76.81 0-42.422-34.39-76.814-76.81-76.814z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconConcentrationOrbIcon })
);

import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAntibodyIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'antibody'];
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
        d="M95.812 29.781a18.002 18.002 0 0 0-12.54 30.91l81.636 81.637-14.543 14.543-73.637-73.637a18.002 18.002 0 0 0-12.916-5.453 18.002 18.002 0 0 0-12.54 30.91l96 96a18.002 18.002 0 1 0 25.456-25.457l-9.636-9.637 14.543-14.543L206 183.418v280.545a18.002 18.002 0 1 0 36 0v-199h28v199a18.002 18.002 0 1 0 36 0V183.418l28.365-28.364 14.543 14.543-9.637 9.637a18.002 18.002 0 1 0 25.457 25.457l96-96a18.002 18.002 0 0 0-13.082-30.902 18.002 18.002 0 0 0-12.375 5.445l-73.636 73.637-14.543-14.543 81.636-81.637a18.002 18.002 0 0 0-13.082-30.902 18.002 18.002 0 0 0-12.375 5.445L270 168.508v78.455h-28v-78.455L108.728 35.234a18.002 18.002 0 0 0-12.916-5.453z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAntibodyIcon })
);

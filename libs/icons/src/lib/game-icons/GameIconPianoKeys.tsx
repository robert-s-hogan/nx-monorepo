import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPianoKeysIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'piano-keys'];
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
        d="M24 80v352h64V288H72V80H24zm96 0v208h-16v144h64V288h-16V80h-32zm80 0v208h-16v144h64V288h-16V80h-32zm80 0v208h-16v144h64V80h-48zm64 0v352h64V288h-16V80h-48zm96 0v208h-16v144h64V80h-48z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPianoKeysIcon })
);

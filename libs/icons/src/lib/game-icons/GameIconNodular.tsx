import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconNodularIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'nodular'];
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
        d="M256 16a90 90 0 0 0-15 178.593v48.75a60 60 0 0 0 0 115.782v49.688A45 45 0 0 0 256 496a45 45 0 0 0 15-87.188v-50.157a60 60 0 0 0 0-115.78V194.59a90 90 0 0 0-15-178.594zm-2.813 30A60 60 0 0 1 256 46a60 60 0 0 1 0 120 60.017 60.017 0 0 1-2.813-120z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconNodularIcon })
);

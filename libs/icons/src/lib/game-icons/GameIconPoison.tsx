import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPoisonIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'poison'];
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
        d="M181 181c15 0 60-60 30-105 15-15 15-30 45-30s60 45 60 75-30 60-75 90-120 90-120 165c0 60 45 120 120 120s150-30 150-120c0-60-60-90-90-90-45 0-75 30-90 75 45-60 135-60 135 15 0 45-45 75-105 75-30 0-60-30-60-75s45-90 90-120 90-75 90-120c0-60-45-120-105-120-30 0-60 30-75 45s-45 15-45 60c0 15 30 60 45 60z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPoisonIcon })
);

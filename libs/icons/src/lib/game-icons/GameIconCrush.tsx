import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCrushIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'crush'];
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
        d="M46 16c-15 0-30 15-30 30v240h60l60 60 60-60 60 60 60-60 60 60 60-60h60V46c0-15-15-30-30-30H46zm211.75 360.03A60 60 0 0 0 196 436a60 60 0 0 0 120 0 60 60 0 0 0-58.25-59.97z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCrushIcon })
);

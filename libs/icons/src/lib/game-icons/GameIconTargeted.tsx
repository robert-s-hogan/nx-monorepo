import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTargetedIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'targeted'];
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
        d="M256 16C123.45 16 16 123.45 16 256s107.45 240 240 240 240-107.45 240-240S388.55 16 256 16zm0 60c99.41 0 180 80.59 180 180s-80.59 180-180 180S76 355.41 76 256 156.59 76 256 76zm-15 30a15 15 0 0 0-15 15v30a15 15 0 0 0 15 15h30a15 15 0 0 0 15-15v-30a15 15 0 0 0-15-15h-30zm16.75 90.03A60 60 0 0 0 196 256a60 60 0 0 0 120 0 60 60 0 0 0-58.25-59.97zM121 226a15 15 0 0 0-15 15v30a15 15 0 0 0 15 15h30a15 15 0 0 0 15-15v-30a15 15 0 0 0-15-15h-30zm240 0a15 15 0 0 0-15 15v30a15 15 0 0 0 15 15h30a15 15 0 0 0 15-15v-30a15 15 0 0 0-15-15h-30zM241 346a15 15 0 0 0-15 15v30a15 15 0 0 0 15 15h30a15 15 0 0 0 15-15v-30a15 15 0 0 0-15-15h-30z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTargetedIcon })
);

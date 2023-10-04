import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSpeakerOffIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'speaker-off'];
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
        d="M275.5 96l-96 96h-96v128h96l96 96V96zm50.863 89.637l-12.726 12.726L371.273 256l-57.636 57.637 12.726 12.726L384 268.727l57.637 57.636 12.726-12.726L396.727 256l57.636-57.637-12.726-12.726L384 243.273l-57.637-57.636z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSpeakerOffIcon })
);

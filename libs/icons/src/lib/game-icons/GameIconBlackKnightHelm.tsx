import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconBlackKnightHelmIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'black-knight-helm'];
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
        d="M256 16c-36.446 0-73.264 13.433-139.97 40h279.94C329.263 29.433 292.445 16 256 16zM95.344 72L64 448c56 28 112 31.5 168 31.938V240H112v-48h288v48H280v239.938C336 479.5 392 476 448 448L416.656 72H95.344zm64.875 88a8 8 0 0 1 7.78 8 8 8 0 0 1-16 0 8 8 0 0 1 8.22-8zm48 0a8 8 0 0 1 7.78 8 8 8 0 0 1-16 0 8 8 0 0 1 8.22-8zm48 0a8 8 0 0 1 7.78 8 8 8 0 0 1-16 0 8 8 0 0 1 8.22-8zm48 0a8 8 0 0 1 7.78 8 8 8 0 0 1-16 0 8 8 0 0 1 8.22-8zm48 0a8 8 0 0 1 7.78 8 8 8 0 0 1-16 0 8 8 0 0 1 8.22-8zM248 240v240c2.667.002 5.333 0 8 0s5.333.002 8 0V240h-16zm-120 48h16v16h-16v-16zm32 0h16v16h-16v-16zm32 0h16v16h-16v-16zm112 0h16v16h-16v-16zm32 0h16v16h-16v-16zm32 0h16v16h-16v-16zm-240 32h16v16h-16v-16zm32 0h16v16h-16v-16zm32 0h16v16h-16v-16zm112 0h16v16h-16v-16zm32 0h16v16h-16v-16zm32 0h16v16h-16v-16zm-240 32h16v16h-16v-16zm32 0h16v16h-16v-16zm32 0h16v16h-16v-16zm112 0h16v16h-16v-16zm32 0h16v16h-16v-16zm32 0h16v16h-16v-16z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconBlackKnightHelmIcon })
);

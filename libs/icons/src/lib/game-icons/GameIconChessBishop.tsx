import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconChessBishopIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'chess-bishop'];
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
        d="M406.02 476.915h-300v-60h300v60zm-83.46-181H189.48v17.65h133.08v-17.65zm11.78-77.69a200 200 0 0 1-9.39 61.69H187.09a200 200 0 0 1-9.39-61.69c0-59.09 23.82-109 56.41-124.67a33.34 33.34 0 1 1 43.82 0c32.59 15.71 56.41 65.58 56.41 124.67zm-51.07-48.91h-19.25v-23.92h-16v23.92h-19.26v16h19.26v51.54h16v-51.54h19.25v-16zm38.15 180.69v-20.44h-130.8v20.44H93.29v.11l49.46 49.46h82.08l31.15-36 31.15 36h82.44l48.87-48.87.27-.69h-97.29z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconChessBishopIcon })
);

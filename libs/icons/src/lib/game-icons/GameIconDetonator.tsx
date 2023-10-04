import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDetonatorIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'detonator'];
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
        d="M25 41v46h94V41H25zm368 0v46h94V41h-94zM137 55v18h110v110h18V73h110V55H137zM73 201v30h366v-30H73zm32 48v190h302V249H105zm151 17l96 150H160l96-150zm-9 38v64h18v-64h-18zm9 75a12 12 0 0 0-12 12 12 12 0 0 0 12 12 12 12 0 0 0 12-12 12 12 0 0 0-12-12zM73 457v30h366v-30H73z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDetonatorIcon })
);

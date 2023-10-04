import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconJBrickIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'j-brick'];
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
        d="M265.5 83.5A9.5 9.5 0 0 0 256 93v96a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0-9.5 9.5v96a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0-9.5 9.5 9.5 9.5 0 0 0-9.5-9.5h-96a9.5 9.5 0 0 0-9.5 9.5v96a9.5 9.5 0 0 0 9.5 9.5h96a9.5 9.5 0 0 0 9.5-9.5 9.5 9.5 0 0 0 9.5 9.5h96a9.5 9.5 0 0 0 9.5-9.5v-96a9.5 9.5 0 0 0-9.5-9.5 9.5 9.5 0 0 0 9.5-9.5v-96a9.5 9.5 0 0 0-9.5-9.5 9.5 9.5 0 0 0 9.5-9.5V93a9.5 9.5 0 0 0-9.5-9.5h-96zm9.5 19h77v77h-77v-77zm0 115h77v77h-77v-77zm-115 115h77v77h-77v-77zm115 0h77v77h-77v-77z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconJBrickIcon })
);

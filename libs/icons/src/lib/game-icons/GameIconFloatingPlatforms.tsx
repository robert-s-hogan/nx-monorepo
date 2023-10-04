import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFloatingPlatformsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'floating-platforms'];
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
        d="M184 43.5v18h144l-.1-18zm24 95.9l-144 .1v18l144-.1zm96.1 0v18l143.9.1v-18.1zm168.4 98.1l-435.63.1L128 372.5l10.9-32 21.1 80 32-52.5 48 128 80-107.5 32 16z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFloatingPlatformsIcon })
);

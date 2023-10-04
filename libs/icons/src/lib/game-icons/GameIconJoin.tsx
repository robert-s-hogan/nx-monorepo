import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconJoinIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'join'];
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
        d="M32 23v18h215v110h-37.6l6.5 13 40.1 80.1 46.6-93.1H265V41h215V23zm224 244.9L209.4 361H247v110H32v18h448v-18H265V361h37.6z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconJoinIcon })
);

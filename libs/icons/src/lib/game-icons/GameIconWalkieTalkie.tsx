import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconWalkieTalkieIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'walkie-talkie'];
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
        d="M71 32v135h18V32H71zm256 0v135h18V32h-18zm-208 95.604V167h18v-39.396h-18zm256 0V167h18v-39.396h-18zM57 185v99.27l16 16V487h110V300.27l16-16V185H57zm256 0v99.27l16 16V487h110V300.27l16-16V185H313zm-96 7v80h16.432v-80H217zm256 0v80h16.432v-80H473zm-393 7h96v18H80v-18zm256 0h96v18h-96v-18zM80 231h96v18H80v-18zm256 0h96v18h-96v-18zM80 263h96v18H80v-18zm256 0h96v18h-96v-18zm-224 41a24 24 0 0 1 24 24 24 24 0 0 1-24 24 24 24 0 0 1-24-24 24 24 0 0 1 24-24zm256 0a24 24 0 0 1 24 24 24 24 0 0 1-24 24 24 24 0 0 1-24-24 24 24 0 0 1 24-24z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconWalkieTalkieIcon })
);

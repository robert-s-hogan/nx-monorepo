import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTriggerHurtIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'trigger-hurt'];
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
        d="M254.25 121.03A60 60 0 0 0 196 181a60 60 0 0 0 120 0 60 60 0 0 0-61.75-59.97zM136 271l-60 60H46c-15 0-30 15-30 30v30h480v-30c0-15-15-30-30-30h-30l-60-60-60 60-60-60-60 60-60-60z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTriggerHurtIcon })
);

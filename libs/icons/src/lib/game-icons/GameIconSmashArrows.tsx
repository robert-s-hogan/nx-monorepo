import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSmashArrowsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'smash-arrows'];
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
        d="M121.068 15.52v339.31H20.54L121.07 497.346h77.385l-47.49-149.364h50.225V15.52h-80.12zm98.81 0v351.15h-43.362l41.547 130.676h80.36l41.548-130.676h-43.36V15.52h-76.733zm95.42 0v332.462h50.223l-47.487 149.364H391.3L491.823 354.83H391.3V15.52h-76z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSmashArrowsIcon })
);

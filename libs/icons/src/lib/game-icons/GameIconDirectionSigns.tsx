import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDirectionSignsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'direction-signs'];
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
        d="M277.3 35.11l-32.1 2.12-1 32.93 33.6.05-.5-35.1zM151.7 88.04L67.96 118.9 152 169.2l188-6.2 2.4-74.72-190.7-.24zM279.2 183l-38.3 1.3-.8 27.8 39.5 1.2-.4-30.3zm-93.1 45.6l.8 64.2 200.4.9 51.7-29.2-55.8-30.2-197.1-5.7zm51.1 82.5l-5 175.3 50.9.6-2.3-175.7-43.6-.2z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDirectionSignsIcon })
);

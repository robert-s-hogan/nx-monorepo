import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSpikesInitIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'spikes-init'];
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
        d="M256 16c-7.5 67.5-37.5 150-37.5 180 0 15 15 30 37.5 30s37.5-15 37.5-30c0-30-30-112.5-37.5-180zm-60 202.5c-30 0-112.5 30-180 37.5 67.5 7.5 150 37.5 180 37.5 15 0 30-15 30-37.5s-15-37.5-30-37.5zm120 0c-15 0-30 15-30 37.5s15 37.5 30 37.5c30 0 112.5-30 180-37.5-67.5-7.5-150-37.5-180-37.5zM256 286c-22.5 0-37.5 15-37.5 30 0 30 30 112.5 37.5 180 7.5-67.5 37.5-150 37.5-180 0-15-15-30-37.5-30z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSpikesInitIcon })
);

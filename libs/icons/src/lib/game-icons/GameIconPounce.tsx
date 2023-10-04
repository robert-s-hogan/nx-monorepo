import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPounceIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'pounce'];
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
        d="M196 16l60 60 60-60H196zm-30 90l90 90 90-90H166zm-30 120l120 120 120-120H136zm121.75 150.03A60 60 0 0 0 196 436a60 60 0 0 0 120 0 60 60 0 0 0-58.25-59.97z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPounceIcon })
);

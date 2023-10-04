import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconIraqIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'iraq'];
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
        d="M17.03 246.5l25.73 60.7 265.44 143 82.2 6.9 38.1-47.1 66.5 4.1-33.5-52.1-5.2-38-116.5-107.9 39-53.8-72.3-100.65-95.4-6.77-69.5 49.82-16.4 97.2z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconIraqIcon })
);

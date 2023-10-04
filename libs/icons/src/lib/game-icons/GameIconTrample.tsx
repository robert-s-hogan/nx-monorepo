import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTrampleIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'trample'];
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
        d="M136 16h15l15 15 15-15h150l15 15 15-15h15v120h-15l-15-15-15 15h-45v345c0 15-15 15-15 15h-30s-15 0-15-15V136h-45l-15-15-15 15h-15z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTrampleIcon })
);

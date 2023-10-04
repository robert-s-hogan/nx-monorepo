import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTripleGateIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'triple-gate'];
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
        d="M256 24L22 216v272h29.03V335.5c0-27.8 27.74-55.5 55.47-55.5 27.7 0 55.5 27.7 55.5 55.5V488h30V312c0-32 32-64 64-64s64 32 64 64v176h30V335.5c0-27.8 27.8-55.5 55.5-55.5s55.5 27.7 55.5 55.5V488h29V216zm-32 55h64v18h-64zm-64 64h192v18H160zm-64 64h320v18H96z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTripleGateIcon })
);

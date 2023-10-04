import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSouthAfricaFlagIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'south-africa-flag'];
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
        d="M18 18v104.324L222.445 256 18 389.676V494h55.553l273.765-179H494V197H347.318L73.553 18zm88.447 0l246.235 161H494V18zm246.235 315L106.447 494H494V333z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSouthAfricaFlagIcon })
);

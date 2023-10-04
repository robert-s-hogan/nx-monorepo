import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconParaguayIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'paraguay'];
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
        d="M30.6 191.3L74.85 34.64C143.1 9.374 223.8 16.21 284.1 36.89l3 143.21 114 11.2 25.5 100.5 54.8-5.2-27 154.5-81.8 56.2-125.2-18 57.7-110.2C192.5 316.9 84.23 263.2 30.6 191.3z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconParaguayIcon })
);

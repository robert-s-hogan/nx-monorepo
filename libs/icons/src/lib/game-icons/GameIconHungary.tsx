import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHungaryIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'hungary'];
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
        d="M20.99 284.7C64.73 325.3 79.94 391.5 158.3 401c65.1-24.1 131.3-47.5 223.9-51L468 182.4c90.6-51.1-102.4-91.48-136.1-52.5-26 30-70.5 37.1-115.9 42.7l-11.2 26.6c-91.6 8.4-82.5-17.3-102.8-33-39.26 20-70.5 77.8-81.01 118.5z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHungaryIcon })
);

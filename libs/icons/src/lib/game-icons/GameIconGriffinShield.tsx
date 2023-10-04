import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconGriffinShieldIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'griffin-shield'];
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
        d="M80 32c-64 256 48 416 176 464 128-48 240-208 176-464-112 32-240 32-352 0zm99.3 52.9c14.7 27.9 40.1 26.4 65 26.4l53.9 1.5 7.8 25 77.1 10.3 3.5 49.9c-27.9 7.4-83.7 5.9-83.8 17.7-.2 20.6 36.3 16.2 78.1 5.9L356.7 276l-61.4 4.4c3.8 46.4-1.2 77.6-35.6 110.7l-21.9-55.3c-12.6 22.6-30 38.8-57.3 41.4 10.6-26 19.1-46.7 9.7-76.3-13.5 13.3-35.1 18.7-64.8 16.7 31.6-49 48.3-101.9 62.1-151.9l-23.2-20.6c-6.6-23.5-1.3-44.1 15-60.2z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconGriffinShieldIcon })
);

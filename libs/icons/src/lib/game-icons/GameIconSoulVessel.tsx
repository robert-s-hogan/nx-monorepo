import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSoulVesselIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'soul-vessel'];
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
        d="M256 32A224 224 0 0 0 32 256a224 224 0 0 0 224 224 224 224 0 0 0 224-224A224 224 0 0 0 256 32zM132.1 282.8c25.2.4 47 17.3 58.2 27.6 49.3 45.3 16.4 87.4-2.7 96.6-33.9 16.5-68.9 9.7-86.8-16.1-36.65-52.9-17.55-89.4 1.6-100.3 9.3-5.3 18.4-7.5 27.2-7.8h2.5zm247.8 0h2.5c8.8.3 17.9 2.5 27.2 7.8 19.2 10.9 38.3 47.4 1.6 100.3-17.9 25.8-52.9 32.6-86.8 16.1-19.1-9.2-52-51.3-2.7-96.6 11.2-10.3 33-27.2 58.2-27.6z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSoulVesselIcon })
);

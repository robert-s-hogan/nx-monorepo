import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHorizonRoadIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'horizon-road'];
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
        d="M129.8 19.64 64.66 113.4H32v18h272.8c12.3 23.5 21.4 40.3 28.1 68.3-118 19.8-137.8 26.8-247.03 65.1C126.4 344.9 167 425 232.8 492.4l246.2-.3c-87.1-63.9-203.5-127.6-260.1-201.3 64.2-33.7 98.8-49.9 155.5-74.6-11.5-28.8-30.3-59.7-53.9-84.8H480v-18H251.2l-54.5-67.85-35.6 23.16z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHorizonRoadIcon })
);

import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconChainedArrowHeadsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'chained-arrow-heads'];
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
        d="M97.53 20.705v.002l6.425 82.932-86.434-6.427v53.73l207.912 74.754L151.26 20.705H97.53zm-80.01.002v31.537L72.42 72.102 53.73 20.707H17.52zM237.366 45.21l15.754 207.743L45.374 237.2l300.363 108.374L237.368 45.21h-.003zm117.342 171.927l.002.008v-.008h-.003zm.002.008l11.272 148.67-148.68-11.272 214.968 77.562-77.56-214.96zm87.493 137.65l.002.008v-.008h-.002zm.002.008l7.158 94.396-94.404-7.16 136.49 49.247-49.245-136.484z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconChainedArrowHeadsIcon })
);

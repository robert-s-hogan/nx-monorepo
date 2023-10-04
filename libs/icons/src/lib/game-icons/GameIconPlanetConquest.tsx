import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconPlanetConquestIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'planet-conquest'];
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
        d="M215 32v140c5.9-1.4 11.9-2.6 18-3.4v-42.9c45-8 90 32.3 135 2.3V48c-45 30-90-10.31-135-2.29V32h-18zm41 153c-83.5 0-151 67.5-151 151s67.5 151 151 151 151-67.5 151-151-67.5-151-151-151zm-20.6 25.8l77.4 119.3-83.7 27.6-22.8-54.1-24.4 21.2-57.9-12.5 48.3-50 41.4 7.9 21.7-59.4zm103.2 6.1l-10.2 34.9 38.3-.7-36.4 31.1-31.1-24.8 12.7-23.6 26.7-16.9zm33.6 148.4l-26.5 42.9-21.2-36.1 47.7-6.8zM316 398l15.9 46.7c-35.1 28.4-87.1 35.9-115.6 16.9l38.2-60.9 29.2 30.7L316 398z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconPlanetConquestIcon })
);

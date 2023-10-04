import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSnakeSpiralIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'snake-spiral'];
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
        d="M258.8 19.67c-64.3-.19-138.9 17.46-171.47 52.48C3.05 162.8-13.47 361.6 79.41 443.4 177 529.4 397.5 496.9 465.4 386c43-70.3-8.8-190.8-78.8-234.4-71.3-44.5-202.8-36.3-250 33.2-35.7 52.7-10.6 157.3 46.6 185.3 56.8 27.8 159.6-14.8 173.7-76.5 7.2-31.6-32.1-64.9-63.3-74-29.7-8.6-82.5-3.2-88.7 27.1-5.7 27.6 39.2 55.4 64.7 54.6 18.2-.6-47.6-29.8-36.4-45.7 17.8-25.3 86.4-1 87.7 29.8 1.9 43.6-81.1 72.6-120 52.7-40.5-20.8-55.4-96.9-28.4-133.5 34.8-47.2 125.6-47.2 175.1-15.9 49.6 31.4 90.4 114.8 60.7 165.4-49.6 84.5-216.1 110-290.3 46-71.77-61.9-61.6-214.7 2.8-284.2C182 49.64 361.7 63.14 390.5 92.21c17.8 26.79 47.6 58.69 90.7 38.19-26.9-7.5-43.3-20.9-50.5-38.65 16.9 6.49 48-.54 64.7-6.46-13.3-16.22-54.6-65.61-92.9-42.93 0 0-66-22.45-143.7-22.69zM423.3 51.8c9.5 8.19 25.9 20.75 40.9 29.42 0 0-34.9.97-43.2-11.39-3.4-5.03-7-9.46 2.3-18.03z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSnakeSpiralIcon })
);

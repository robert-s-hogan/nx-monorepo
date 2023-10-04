import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLibyaIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'libya'];
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
        d="M477.6 99.68l8.5 363.72L454 465 211.7 351.9l-48.1 28.2-137.68-94 14.52-133L98.59 46.98 199.4 77.54l13.1 25.96 97 39.7 34.4-13.8-19.1-45.75 82.5-22.92z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLibyaIcon })
);

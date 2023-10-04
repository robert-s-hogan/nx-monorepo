import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSprintIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'sprint'];
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
        d="M169.53 16.344L259.345 88 337 92.28l-1.03 18.657-161.376-8.906-118.78-4.905 227.28 68.03-197.72 246.75-14.53-17.655-49.22 96.625 248.69-202.78 51.81 11.592-38.78 40.594L270.5 329.5l-57.28 84.125L444.843 273.47 328 241.06l100.22-81.718c1.132.46 2.3.898 3.5 1.22 23.324 6.248 49.764-16.835 59.06-51.533 9.298-34.695-2.08-67.874-25.405-74.124-23.325-6.25-49.765 16.802-59.063 51.5-1.467 5.476-2.403 10.918-2.875 16.22L169.53 16.343z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSprintIcon })
);

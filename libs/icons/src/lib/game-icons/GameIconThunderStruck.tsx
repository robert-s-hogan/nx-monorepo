import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconThunderStruckIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'thunder-struck'];
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
        d="M20.22 21.75v65.5l92 70.625-60.126 58.094 235.656 157.5-83.844-5.845 93.25 76.53-77.562 5.47 113.5 40.656-4.625-69.03h-21.783c0-37.79-.747-91.963 32.5-100-5.097-7.648-8.187-17.65-8.187-28.625 0-23.993 14.784-43.47 33-43.47s32.97 19.475 32.97 43.47c0 11.247-3.24 21.472-8.564 29.188 30.514 8.638 32.875 61.79 32.875 99.437h-22.967l-5.25 69.813 91.906-59.594-49.064 4.374 57.594-105.53-60.156 16.905 57.5-92.814-68.53 28.813 54.217-102.345-72.655 43.063 18.53-123.407-51.717 115.94-71.125-144.032 23 165.062-66.25-52.5 42.468 85.75-120.436-76.97 73.594-54.655L123.188 21.75H20.218z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconThunderStruckIcon })
);

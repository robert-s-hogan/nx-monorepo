import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTempleDoorIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'temple-door'];
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
        d="M41.02 33v46H471V33zm62.48 64L34.59 479H142.8V97zm57.3 0v211.6c8 1.2 16.9-.5 27.3-4.7 36.9-18.9 63.4-52.9 88.1-93.1 21.9-35.7 42.1-76.1 67-113.8h-54c-5.8 50.3-52.6 118-81.2 151 24.6-45.2 60.9-111.8 60.3-151h-51.9c-2.6 29.1-12.6 58.4-24.4 87 4.8-30 10.7-58.2 8.3-87zm208.4 0v382h108.2L408.5 97zM186.4 323.5c-8.6 2.5-17.3 3.7-25.6 3V479h53.7c-2.3-46.2 2.4-65.2-28.1-155.5z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTempleDoorIcon })
);

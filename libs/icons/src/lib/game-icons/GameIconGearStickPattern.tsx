import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconGearStickPatternIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'gear-stick-pattern'];
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
        d="M82.64 48.26a51.94 51.94 0 0 0-51.68 51.94 51.94 51.94 0 0 0 42.2 50.9v209.7a51.94 51.94 0 0 0-42.2 51 51.94 51.94 0 0 0 51.94 51.9 51.94 51.94 0 0 0 51.9-51.9 51.94 51.94 0 0 0-42.15-51v-95.1H246.2v95.1a51.94 51.94 0 0 0-42.2 51 51.94 51.94 0 0 0 52 51.9 51.94 51.94 0 0 0 51.9-51.9 51.94 51.94 0 0 0-42.2-51v-95.1H438.8V151.1a51.94 51.94 0 0 0 42.2-50.9 51.94 51.94 0 0 0-51.9-51.94 51.94 51.94 0 0 0-.2 0 51.94 51.94 0 0 0-51.7 51.94 51.94 51.94 0 0 0 42.2 50.9v95.1H265.7v-95.1a51.94 51.94 0 0 0 42.2-50.9A51.94 51.94 0 0 0 256 48.26a51.94 51.94 0 0 0-.2 0A51.94 51.94 0 0 0 204 100.2a51.94 51.94 0 0 0 42.2 50.9v95.1H92.65v-95.1a51.94 51.94 0 0 0 42.15-50.9 51.94 51.94 0 0 0-51.9-51.94 51.94 51.94 0 0 0-.26 0z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconGearStickPatternIcon })
);

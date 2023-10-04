import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconZigzagHieroglyphIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'zigzag-hieroglyph'];
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
        d="M204.3 118.4L152.5 188l-51.3-69.1L20.99 220l21.94 17.4 57.47-72.5 52.1 69.9 51.8-69.4 51.6 69.5 51.7-69.6 51.8 69.6 52-70 57.6 72.5 22-17.4-80.4-101.1-51.2 69-51.8-69.4-51.7 69.4-51.6-69.5zm0 156.4l-51.8 69.3-51.3-68.8-80.17 100.8 21.92 17.4 57.55-72.4 52 69.8 51.8-69.3 51.6 69.3 51.7-69.3 51.8 69.3 52-69.8 57.7 72.4 21.8-17.4-80.3-100.8-51.2 68.8-51.8-69.3-51.7 69.3-51.6-69.3z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconZigzagHieroglyphIcon })
);

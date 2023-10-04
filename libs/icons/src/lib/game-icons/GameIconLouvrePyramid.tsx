import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLouvrePyramidIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'louvre-pyramid'];
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
        d="M256 71.3L14.72 416H497.3zm0 31.4l21 30-21 30-21-30zm-32 45.7l21 30-21 30-21-30zm64 0l21 30-21 30-21-30zm-86.7 32.4l-9.3 13.4 21 30-21 29.9-21-30zM320 194.1l21 30-21 30-21-30zm-64 .1l21 29.9-21 30-21-30zm-88.6 35l-7.4 10.7 21 30-21 29.9-21-30zM352 239.8l21 30-21 30-21-30zm-128 .1l21 30-21 29.9-21-29.9zm64 0l21 30-21 29.9-21-29.9zm-154.3 37.6l-5.7 8.1 21 30-21 29.9-21-30zm245.9 1.8l25.4 36.2-21 30-21-29.9 21-30zM192 285.6l21 30-21 29.9-21-29.9zm64 0l21 30-21 29.9-21-29.9zm64 0l21 30-21 29.9-21-29.9zM98.51 327.7l-2.52 3.6 21.01 30L91.29 398h-42zm315.19.4l49 69.9h-42L395 361.3l21-30zM160 331.3l21 30-21 29.9-21-29.9zm64 0l21 30-21 29.9-21-29.9zm64 0l21 30-21 29.9-21-29.9zm64 0l21 30-21 29.9-21-29.9zm-224 45.8l14.6 20.9h-29.2zm64 0l14.6 20.9h-29.2zm64 0l14.6 20.9h-29.2zm64 0l14.6 20.9h-29.2zm64 0l14.6 20.9h-29.2z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLouvrePyramidIcon })
);

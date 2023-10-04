import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconTireIronCrossIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'tire-iron-cross'];
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
        d="M52.47 16.94L16.95 52.45 71.3 106.6h22.59L215 227.7v56.5L93.84 405.4H71.28l-54.26 54.2 35.34 35.5 54.24-54.4v-22.5L227.8 297h56.4l121.2 121.2v22.5l54.2 54.3 35.4-35.4-54.3-54.2h-22.5L297 284.2v-56.5l121.1-121.1h22.6L495 52.36 459.7 17l-54.3 54.25v22.57L284.2 215h-56.4L106.6 93.86V71.28L52.47 16.94z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconTireIronCrossIcon })
);

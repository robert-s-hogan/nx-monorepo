import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLevelTwoAdvancedIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'level-two-advanced'];
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
        d="M256 16c-22.5 72-45 72-45 120 0 0 22.5 24 45 24s45-24 45-24c0-48-22.5-48-45-120zm0 144c-49.706 0-90 42.98-90 96s40.294 96 90 96c49.705 0 90-42.98 90-96s-40.295-96-90-96zm0 192c-22.5 0-45 24-45 24 0 48 22.5 48 45 120 22.5-72 45-72 45-120 0 0-22.5-24-45-24zm-22.5-168h45v48h45v48h-45v48h-45v-48h-45v-48h45v-48z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLevelTwoAdvancedIcon })
);

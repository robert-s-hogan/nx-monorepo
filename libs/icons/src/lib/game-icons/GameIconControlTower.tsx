import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconControlTowerIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'control-tower'];
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
        d="M352 21v18h39v16h18V39h39V21h-96zm35 52l-40 30h106l-40-30h-26zM69.48 120.5l-8.96 15.6 110.98 63.7 35.6 20.4 33.6-58.7-77 13.1-94.22-54.1zM329 121v30h30v-30h-30zm48 0v30h46v-30h-46zm64 0v30h30v-30h-30zm-103 48l34.5 46h55l34.5-46H338zm39 64v30h46v-30h-46zm0 48v206h46V281h-46zM68.52 329L34.3 375H359v-46H68.52zM25 393v94h30v-64h66v64h238v-94H25zm416 .5V487h46v-65.9l-46-27.6zM160 439h48v18h-48v-18zm96 0h48v18h-48v-18zm-183 2v46h30v-46H73z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconControlTowerIcon })
);

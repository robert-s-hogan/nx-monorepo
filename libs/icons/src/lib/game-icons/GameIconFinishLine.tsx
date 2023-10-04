import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconFinishLineIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'finish-line'];
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
        d="M23 24v464h18V386.9c152.3 29.4 277.6 29.4 430 0V488h18V24h-18v16h-23v32h23v32h-23v32h23v232.6c-153.3 29.9-276.7 29.9-430 0V104h23V72H41V24H23zm41 48h32V40H64v32zm32 0v32h32V72H96zm32 0h32V40h-32v32zm32 0v32h32V72h-32zm32 0h32V40h-32v32zm32 0v32h32V72h-32zm32 0h32V40h-32v32zm32 0v32h32V72h-32zm32 0h32V40h-32v32zm32 0v32h32V72h-32zm32 0h32V40h-32v32zm32 0v32h32V72h-32zm0 32h-32v32h32v-32zm-64 0h-32v32h32v-32zm-64 0h-32v32h32v-32zm-64 0h-32v32h32v-32zm-64 0h-32v32h32v-32zm-64 0H64v32h32v-32z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconFinishLineIcon })
);

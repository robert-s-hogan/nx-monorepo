import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconAbstract098Icon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'abstract-098'];
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
        d="m115.0001,21.0001v94h-94.0001v94h94.0001v94h-94.0001v94h94.0001v94h94v-94h94v94h93.9999v-94h94v-94h-94v-94h94v-94h-94v-94h-93.9999v94h-94v-94h-94zm141,148.9312c47.548,0 86.0687,38.5208 86.0687,86.0687s-38.5207,86.0687-86.0687,86.0687-86.0688-38.5208-86.0688-86.0687 38.5208-86.0687 86.0688-86.0687zm0,29.9625c-30.9781,0-56.1063,25.128-56.1063,56.1063s25.1281,56.1062 56.1063,56.1062 56.1062-25.128 56.1062-56.1062-25.1281-56.1063-56.1062-56.1063z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconAbstract098Icon })
);

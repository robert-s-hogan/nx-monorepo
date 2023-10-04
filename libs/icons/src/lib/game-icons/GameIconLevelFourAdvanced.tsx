import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLevelFourAdvancedIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'level-four-advanced'];
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
        d="M16 16c48 96 24 120 72 168 0 0 48 0 72-24s24-72 24-72c-48-48-72-24-168-72zm144 144c-24.57 24.57-39.75 58.51-39.75 96s15.18 71.43 39.75 96c24.57 24.57 58.51 39.75 96 39.75s71.43-15.18 96-39.75c24.57-24.57 39.78-58.51 39.78-96s-15.21-71.43-39.78-96c-24.57-24.57-58.51-39.75-96-39.75s-71.43 15.18-96 39.75zm192 0c24 24 72 24 72 24 48-48 24-72 72-168-96 48-120 24-168 72 0 0 0 48 24 72zm0 192c-24 24-24 72-24 72 48 48 72 24 168 72-48-96-24-120-72-168 0 0-48 0-72 24zm-192 0c-24-24-72-24-72-24-48 48-24 72-72 168 96-48 120-24 168-72 0 0 0-48-24-72zm62.063-197.813h67.875v67.875h67.875v67.875h-67.875v67.875h-67.875v-67.875h-67.875v-67.875h67.875v-67.875z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLevelFourAdvancedIcon })
);

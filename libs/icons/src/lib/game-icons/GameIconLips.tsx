import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconLipsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'lips'];
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
        d="M166.844 112.344c-42.01 38.554-97.815 75.023-147.53 86.03 39.097 14.38 89.036 18.718 134.717 9.157 53.264 31.33 128.095 32.185 184.876 0 44.99 15.297 96.346 13.18 149.688-9.31-59.564-9.606-125.004-51.588-155.25-85.876-55.502 39.62-111 32.146-166.5 0zm-133.72 114.03c17.33 29.572 48.467 79.248 89.75 131.064 27.24 34.188 76.606 31.093 129.97 31.093 49.298 0 102.29.706 127.625-31.092 37.724-47.35 68.59-92.143 88.217-122-124.874 84.53-316.773 93.18-435.562-9.063z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconLipsIcon })
);

import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconDoubledIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'doubled'];
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
        d="M304.833 16c-261.69 0-320.71 387.657-62.343 387.657 86.284 0 86.955-129.375 0-129.375-139.947 0-99.134-202.896 62.343-258.282zm-30.938 92.343c-86.283 0-86.955 129.375 0 129.375 139.95 0 88.353 202.896-73.125 258.282 261.69 0 331.49-387.657 73.125-387.657z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconDoubledIcon })
);

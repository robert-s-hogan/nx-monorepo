import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconExpandIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'expand'];
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
        d="M64 64v128l48-48 48 48 32-32-48-48 48-48H64zm256 0l48 48-48 48 32 32 48-48 48 48V64H320zM64 320v128h128l-48-48 48-48-32-32-48 48-48-48zm288 0l-32 32 48 48-48 48h128V320l-48 48-48-48z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconExpandIcon })
);

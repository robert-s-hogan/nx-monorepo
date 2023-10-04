import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconContractIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'contract'];
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
        d="M96 64L64 96l48 48-48 48h128V64l-48 48-48-48zm224 0v128h128l-48-48 48-48-32-32-48 48-48-48zM64 320l48 48-48 48 32 32 48-48 48 48V320H64zm256 0v128l48-48 48 48 32-32-48-48 48-48H320z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconContractIcon })
);

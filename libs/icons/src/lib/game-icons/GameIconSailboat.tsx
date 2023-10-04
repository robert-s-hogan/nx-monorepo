import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconSailboatIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'sailboat'];
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
        d="M199.256 74.5v285H27.744l25.998 78H380.255l104-78h-267v-285h-18zm18 18c36.787 88.85 64.94 216 0 250h208c22-34-11.905-164.76-208-250zm-36 0c-33.046 69.333-50 200-144 250h144v-250z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconSailboatIcon })
);

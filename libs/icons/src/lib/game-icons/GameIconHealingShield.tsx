import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHealingShieldIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'healing-shield'];
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
        d="M256 21.98c-64 48-128 68-224.03 100.02C31.97 234 112 394 256 490c144-96 224-250 224-362-96-32.02-160-58.02-224-106.02zM229 128h54v101h101v54H283v101h-54V283H128v-54h101V128z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHealingShieldIcon })
);

import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconHelicopterIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'helicopter'];
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
        d="M279.27 114.408l-2.297 9.184H87v18h185.473l-7.5 30h46.054l-7.5-30H489v-18H299.027l-2.297-9.184h-17.46zM26.623 173.592l14.62 87.724-12.757 38.276H44.27l32.548-32.547L197.94 284.35l2.11 4.216c7.196 14.39 18.094 25.306 28.942 32.538C239.84 328.334 251 331.592 256 331.592h128c23 0 46.04-3.978 62.346-11.225 8.152-3.623 14.546-8.035 18.63-12.703 1.744-1.993 3.066-3.993 4.034-6.072H314.066l-48-112H259l-64 48H74.437l-32-64H26.623zm259.025 16l40.286 94h44.418l-40.286-94h-44.418zm64.2.47l40.086 93.53h79.138c-7.773-34.538-24.96-56.882-47.127-71.49-20.674-13.625-46.067-20.328-72.097-22.04zm46.525 159.186c-4.108.223-8.24.344-12.373.344h-6.488l10 30h-87.024l10-30h-18.976l-10 30H199v18h251.967l24.02-17.764 7.236-5.35-10.703-14.474-7.237 5.35-19.25 14.238h-38.545l-10.115-30.344z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconHelicopterIcon })
);

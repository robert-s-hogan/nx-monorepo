import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconClosedDoorsIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'closed-doors'];
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
        d="M247 57.545c-29.212 2.622-71.312 17.137-106.37 38.172-19.394 11.637-36.707 25.19-48.83 39.178C79.68 148.882 73 163 73 176v263h174v-78h-46v16h-66v-16h-32v-66h32v-16h66v16h46V57.545zm18 0V295h46v-16h66v16h32v66h-32v16h-66v-16h-46v78h174V176c0-13-6.678-27.118-18.8-41.105-12.123-13.988-29.436-27.54-48.83-39.178C336.31 74.682 294.21 60.167 265 57.545zM153 297v62h30v-62h-30zm176 0v62h30v-62h-30zm-208 16v30h14v-30h-14zm80 0v30h110v-30H201zm176 0v30h14v-30h-14zM73 457v30h174v-30H73zm192 0v30h174v-30H265z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconClosedDoorsIcon })
);

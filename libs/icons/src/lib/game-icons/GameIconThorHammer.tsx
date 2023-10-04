import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconThorHammerIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'thor-hammer'];
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
        d="M266.033 32.42l-85.238 85.238v19.799L285.832 32.42h-19.799zm41.528 3.728L184.523 159.186l168.291 168.29L475.852 204.44 307.56 36.15zm172.02 190.02L374.542 331.205h19.799l85.238-85.238v-19.799zm-239.903 13.627l-9.9 9.9 32.527 32.528 9.9-9.9-32.527-32.528zm-22.627 22.627l-23.528 23.527h47.055l-23.527-23.527zm-41.528 41.527l-27.255 27.256h65.054l27.256-27.256h-65.055zm-45.255 45.256l-27.254 27.254h65.054l27.254-27.254h-65.054zm-27.254 45.254l23.527 23.527 23.527-23.527h-47.054zm-21.729 3.728l-9.898 9.899 32.527 32.527 9.898-9.898-32.527-32.527zm-38.767 18.899l-7.504 22.512 37.388 37.388 22.512-7.504v-12.414L54.93 417.086H42.518z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconThorHammerIcon })
);

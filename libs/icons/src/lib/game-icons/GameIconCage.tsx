import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCageIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'cage'];
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
        d="M119 75v64H55v346h402V139h-64V75H128zm18 18h46v46h-46zm64 0h46v46h-46zm64 0h46v46h-46zm64 0h46v46h-46zM73 157h46v18H73zm64 0h46v18h-46zm64 0h46v18h-46zm64 0h46v18h-46zm64 0h46v18h-46zm64 0h46v18h-46zM73 193h46v46H73zm64 0h46v46h-46zm64 0h46v46h-46zm64 0h46v46h-46zm64 0h46v46h-46zm64 0h46v46h-46zM73 257h46v46H73zm64 0h46v46h-46zm64 0h46v46h-46zm70.508 0h96.984l-26.287 46h20.73L375 281.889v156.22L362.937 417h-20.732l26.287 50h-96.984l26.287-50h-20.733L265 438.11V281.888L277.064 303h20.73zM393 257h46v46h-46zM73 321h46v46H73zm64 0h46v46h-46zm64 0h46v46h-46zm88 0v78h62v-78zm104 0h46v46h-46zm-73 10.043c7.732 0 14 6.268 14 14a14 14 0 0 1-5.19 10.87l5.19 31.13h-28l5.19-31.135a14 14 0 0 1-5.19-10.865c0-7.732 6.268-14 14-14zM73 385h46v46H73zm64 0h46v46h-46zm64 0h46v46h-46zm192 0h46v46h-46zM73 449h46v18H73zm64 0h46v18h-46zm64 0h46v18h-46zm192 0h46v18h-46z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCageIcon })
);

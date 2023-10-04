import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const GameIconCalendarIcon = (props: CommonProps) => {
  const svgClassNames = ['game-icon', 'calendar'];
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
        d="M119 31v66h18V31h-18zm256 0v66h18V31h-18zM73 89v30h366V89h-28v26h-54V89H155v26h-54V89H73zm0 48v302h366V137H73zm110 14h18v32h46v-32h18v32h46v-32h18v32h46v-32h18v32h32v18h-32v46h32v18h-32v46h32v18h-32v46h32v18H265v32h-18v-32h-46v32h-18v-32h-46v32h-18v-32H87v-18h32v-46H87v-18h32v-46H87v-18h32v-46H87v-18h96v-32zm-46 50v46h46v-46h-46zm64 0v46h46v-46h-46zm64 0v46h46v-46h-46zm64 0v46h46v-46h-46zm-192 64v46h46v-46h-46zm64 0v46h46v-46h-46zm64 0v13.27c2.545-5.936 7.334-10.725 13.27-13.27H265zm32.73 0c5.936 2.545 10.725 7.334 13.27 13.27V265h-13.27zm31.27 0v46h46v-46h-46zm-41 16c-3.973 0-7 3.027-7 7s3.027 7 7 7 7-3.027 7-7-3.027-7-7-7zm-23 16.73V311h13.27c-5.936-2.545-10.725-7.334-13.27-13.27zm46 0c-2.545 5.936-7.334 10.725-13.27 13.27H311v-13.27zM137 329v46h46v-46h-46zm64 0v46h46v-46h-46zm64 0v46h46v-46h-46zm64 0v46h46v-46h-46z"
      />
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: GameIconCalendarIcon })
);

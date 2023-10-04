import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherCornerRightDownIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feather-corner-right-down'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-corner-right-down ${combinedClassNames}`}
      {...props}
    >
      <polyline points="10 15 15 20 20 15"></polyline>
      <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: FeatherCornerRightDownIcon })
);

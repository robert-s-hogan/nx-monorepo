import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherFastForwardIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feather-fast-forward'];
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
      className={`feather feather-fast-forward ${combinedClassNames}`}
      {...props}
    >
      <polygon points="13 19 22 12 13 5 13 19"></polygon>
      <polygon points="2 19 11 12 2 5 2 19"></polygon>
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: FeatherFastForwardIcon })
);

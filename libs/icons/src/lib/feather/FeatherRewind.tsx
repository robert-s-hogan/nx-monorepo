import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherRewindIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feather-rewind'];
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
      className={`feather feather-rewind ${combinedClassNames}`}
      {...props}
    >
      <polygon points="11 19 2 12 11 5 11 19"></polygon>
      <polygon points="22 19 13 12 22 5 22 19"></polygon>
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: FeatherRewindIcon })
);

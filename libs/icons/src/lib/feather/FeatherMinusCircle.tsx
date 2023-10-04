import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherMinusCircleIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feather-minus-circle'];
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
      className={`feather feather-minus-circle ${combinedClassNames}`}
      {...props}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: FeatherMinusCircleIcon })
);

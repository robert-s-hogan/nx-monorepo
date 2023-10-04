import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherToggleLeftIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feather-toggle-left'];
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
      className={`feather feather-toggle-left ${combinedClassNames}`}
      {...props}
    >
      <rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect>
      <circle cx="8" cy="12" r="3"></circle>
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: FeatherToggleLeftIcon })
);

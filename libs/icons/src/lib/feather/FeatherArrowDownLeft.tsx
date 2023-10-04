import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherArrowDownLeftIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feather-arrow-down-left'];
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
      className={`feather feather-arrow-down-left ${combinedClassNames}`}
      {...props}
    >
      <line x1="17" y1="7" x2="7" y2="17"></line>
      <polyline points="17 17 7 17 7 7"></polyline>
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: FeatherArrowDownLeftIcon })
);

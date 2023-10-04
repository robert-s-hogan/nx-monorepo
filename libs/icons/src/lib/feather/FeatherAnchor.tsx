import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherAnchorIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feather-anchor'];
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
      className={`feather feather-anchor ${combinedClassNames}`}
      {...props}
    >
      <circle cx="12" cy="5" r="3"></circle>
      <line x1="12" y1="22" x2="12" y2="8"></line>
      <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: FeatherAnchorIcon })
);

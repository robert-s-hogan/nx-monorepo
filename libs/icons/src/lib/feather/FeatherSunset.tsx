import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherSunsetIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feather-sunset'];
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
      className={`feather feather-sunset ${combinedClassNames}`}
      {...props}
    >
      <path d="M17 18a5 5 0 0 0-10 0"></path>
      <line x1="12" y1="9" x2="12" y2="2"></line>
      <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line>
      <line x1="1" y1="18" x2="3" y2="18"></line>
      <line x1="21" y1="18" x2="23" y2="18"></line>
      <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line>
      <line x1="23" y1="22" x2="1" y2="22"></line>
      <polyline points="16 5 12 9 8 5"></polyline>
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: FeatherSunsetIcon })
);

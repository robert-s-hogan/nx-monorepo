import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherItalicIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feather-italic'];
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
      className={`feather feather-italic ${combinedClassNames}`}
      {...props}
    >
      <line x1="19" y1="4" x2="10" y2="4"></line>
      <line x1="14" y1="20" x2="5" y2="20"></line>
      <line x1="15" y1="4" x2="9" y2="20"></line>
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: FeatherItalicIcon })
);

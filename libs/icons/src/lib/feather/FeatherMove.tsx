import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherMoveIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feather-move'];
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
      className={`feather feather-move ${combinedClassNames}`}
      {...props}
    >
      <polyline points="5 9 2 12 5 15"></polyline>
      <polyline points="9 5 12 2 15 5"></polyline>
      <polyline points="15 19 12 22 9 19"></polyline>
      <polyline points="19 9 22 12 19 15"></polyline>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <line x1="12" y1="2" x2="12" y2="22"></line>
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: FeatherMoveIcon })
);

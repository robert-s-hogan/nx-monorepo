
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherCornerLeftDownIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feathercornerleftdown'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-feathercornerleftdown ${combinedClassNames}`}
      {...otherProps}
    >
      <polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>
    </svg>
  );
};

export const FeatherCornerLeftDown = IconWrapper(FeatherCornerLeftDownIcon);
  
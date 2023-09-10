
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherLayoutIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherlayout'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherlayout ${combinedClassNames}`}
      {...otherProps}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  );
};

export const FeatherLayout = IconWrapper(FeatherLayoutIcon);
  
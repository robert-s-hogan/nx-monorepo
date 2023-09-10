
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherSidebarIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feathersidebar'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-feathersidebar ${combinedClassNames}`}
      {...otherProps}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>
    </svg>
  );
};

export const FeatherSidebar = IconWrapper(FeatherSidebarIcon);
  
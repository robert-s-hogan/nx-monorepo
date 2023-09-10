
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherTabletIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feathertablet'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-feathertablet ${combinedClassNames}`}
      {...otherProps}
    >
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>
  );
};

export const FeatherTablet = IconWrapper(FeatherTabletIcon);
  

import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherFrownIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherfrown'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherfrown ${combinedClassNames}`}
      {...otherProps}
    >
      <circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>
    </svg>
  );
};

export const FeatherFrown = IconWrapper(FeatherFrownIcon);
  
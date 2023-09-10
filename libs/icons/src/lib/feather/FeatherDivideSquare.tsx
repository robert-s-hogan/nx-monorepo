
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherDivideSquareIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherdividesquare'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherdividesquare ${combinedClassNames}`}
      {...otherProps}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>
    </svg>
  );
};

export const FeatherDivideSquare = IconWrapper(FeatherDivideSquareIcon);
  
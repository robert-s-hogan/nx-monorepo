
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherGridIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feathergrid'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-feathergrid ${combinedClassNames}`}
      {...otherProps}
    >
      <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  );
};

export const FeatherGrid = IconWrapper(FeatherGridIcon);
  
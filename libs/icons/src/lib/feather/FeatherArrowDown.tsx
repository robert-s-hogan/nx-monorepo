
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherArrowDownIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherarrowdown'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherarrowdown ${combinedClassNames}`}
      {...otherProps}
    >
      <line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>
    </svg>
  );
};

export const FeatherArrowDown = IconWrapper(FeatherArrowDownIcon);
  
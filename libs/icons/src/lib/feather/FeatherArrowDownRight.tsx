
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherArrowDownRightIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherarrowdownright'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherarrowdownright ${combinedClassNames}`}
      {...otherProps}
    >
      <line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>
    </svg>
  );
};

export const FeatherArrowDownRight = IconWrapper(FeatherArrowDownRightIcon);
  
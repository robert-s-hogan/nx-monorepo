
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherBarChartIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherbarchart'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherbarchart ${combinedClassNames}`}
      {...otherProps}
    >
      <line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>
  );
};

export const FeatherBarChart = IconWrapper(FeatherBarChartIcon);
  
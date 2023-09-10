
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherPieChartIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherpiechart'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherpiechart ${combinedClassNames}`}
      {...otherProps}
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>
    </svg>
  );
};

export const FeatherPieChart = IconWrapper(FeatherPieChartIcon);
  

import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherArrowDownLeftIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherarrowdownleft'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherarrowdownleft ${combinedClassNames}`}
      {...otherProps}
    >
      <line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>
    </svg>
  );
};

export const FeatherArrowDownLeft = IconWrapper(FeatherArrowDownLeftIcon);
  
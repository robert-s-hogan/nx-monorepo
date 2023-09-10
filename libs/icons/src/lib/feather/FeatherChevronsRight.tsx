
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherChevronsRightIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherchevronsright'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherchevronsright ${combinedClassNames}`}
      {...otherProps}
    >
      <polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>
    </svg>
  );
};

export const FeatherChevronsRight = IconWrapper(FeatherChevronsRightIcon);
  
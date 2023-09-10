
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherCornerUpRightIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feathercornerupright'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-feathercornerupright ${combinedClassNames}`}
      {...otherProps}
    >
      <polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>
    </svg>
  );
};

export const FeatherCornerUpRight = IconWrapper(FeatherCornerUpRightIcon);
  
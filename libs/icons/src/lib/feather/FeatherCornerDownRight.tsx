
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherCornerDownRightIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feathercornerdownright'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-feathercornerdownright ${combinedClassNames}`}
      {...otherProps}
    >
      <polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
    </svg>
  );
};

export const FeatherCornerDownRight = IconWrapper(FeatherCornerDownRightIcon);
  
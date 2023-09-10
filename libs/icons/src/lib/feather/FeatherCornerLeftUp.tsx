
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherCornerLeftUpIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feathercornerleftup'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-feathercornerleftup ${combinedClassNames}`}
      {...otherProps}
    >
      <polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>
    </svg>
  );
};

export const FeatherCornerLeftUp = IconWrapper(FeatherCornerLeftUpIcon);
  
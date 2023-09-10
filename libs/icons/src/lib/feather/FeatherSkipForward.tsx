
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherSkipForwardIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherskipforward'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherskipforward ${combinedClassNames}`}
      {...otherProps}
    >
      <polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>
    </svg>
  );
};

export const FeatherSkipForward = IconWrapper(FeatherSkipForwardIcon);
  
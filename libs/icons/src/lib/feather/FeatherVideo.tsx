
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherVideoIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feathervideo'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-feathervideo ${combinedClassNames}`}
      {...otherProps}
    >
      <polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
    </svg>
  );
};

export const FeatherVideo = IconWrapper(FeatherVideoIcon);
  

import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherMehIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feathermeh'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-feathermeh ${combinedClassNames}`}
      {...otherProps}
    >
      <circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>
    </svg>
  );
};

export const FeatherMeh = IconWrapper(FeatherMehIcon);
  
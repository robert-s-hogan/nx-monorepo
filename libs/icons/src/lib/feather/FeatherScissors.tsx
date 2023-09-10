
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherScissorsIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherscissors'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherscissors ${combinedClassNames}`}
      {...otherProps}
    >
      <circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>
    </svg>
  );
};

export const FeatherScissors = IconWrapper(FeatherScissorsIcon);
  
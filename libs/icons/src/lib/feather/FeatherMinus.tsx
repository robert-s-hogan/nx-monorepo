
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherMinusIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherminus'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherminus ${combinedClassNames}`}
      {...otherProps}
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
};

export const FeatherMinus = IconWrapper(FeatherMinusIcon);
  
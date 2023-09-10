
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherZapIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherzap'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherzap ${combinedClassNames}`}
      {...otherProps}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  );
};

export const FeatherZap = IconWrapper(FeatherZapIcon);
  
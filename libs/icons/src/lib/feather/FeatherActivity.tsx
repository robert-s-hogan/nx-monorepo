
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherActivityIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featheractivity'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featheractivity ${combinedClassNames}`}
      {...otherProps}
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
  );
};

export const FeatherActivity = IconWrapper(FeatherActivityIcon);
  
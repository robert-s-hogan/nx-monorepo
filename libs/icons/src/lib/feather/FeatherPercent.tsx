
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherPercentIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherpercent'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherpercent ${combinedClassNames}`}
      {...otherProps}
    >
      <line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>
    </svg>
  );
};

export const FeatherPercent = IconWrapper(FeatherPercentIcon);
  
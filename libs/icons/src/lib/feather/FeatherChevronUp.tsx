
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherChevronUpIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherchevronup'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherchevronup ${combinedClassNames}`}
      {...otherProps}
    >
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  );
};

export const FeatherChevronUp = IconWrapper(FeatherChevronUpIcon);
  
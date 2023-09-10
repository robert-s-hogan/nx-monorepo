
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherArrowLeftIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherarrowleft'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherarrowleft ${combinedClassNames}`}
      {...otherProps}
    >
      <line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  );
};

export const FeatherArrowLeft = IconWrapper(FeatherArrowLeftIcon);
  
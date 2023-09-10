
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherClockIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherclock'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherclock ${combinedClassNames}`}
      {...otherProps}
    >
      <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
};

export const FeatherClock = IconWrapper(FeatherClockIcon);
  
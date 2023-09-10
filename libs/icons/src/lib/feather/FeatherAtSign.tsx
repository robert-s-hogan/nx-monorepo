
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherAtSignIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featheratsign'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featheratsign ${combinedClassNames}`}
      {...otherProps}
    >
      <circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
    </svg>
  );
};

export const FeatherAtSign = IconWrapper(FeatherAtSignIcon);
  
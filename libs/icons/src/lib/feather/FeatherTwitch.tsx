
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherTwitchIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feathertwitch'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-feathertwitch ${combinedClassNames}`}
      {...otherProps}
    >
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
    </svg>
  );
};

export const FeatherTwitch = IconWrapper(FeatherTwitchIcon);
  
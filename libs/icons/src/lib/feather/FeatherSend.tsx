
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherSendIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feathersend'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-feathersend ${combinedClassNames}`}
      {...otherProps}
    >
      <line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  );
};

export const FeatherSend = IconWrapper(FeatherSendIcon);
  

import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherVoicemailIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feathervoicemail'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-feathervoicemail ${combinedClassNames}`}
      {...otherProps}
    >
      <circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>
    </svg>
  );
};

export const FeatherVoicemail = IconWrapper(FeatherVoicemailIcon);
  

import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherRadioIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherradio'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherradio ${combinedClassNames}`}
      {...otherProps}
    >
      <circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
    </svg>
  );
};

export const FeatherRadio = IconWrapper(FeatherRadioIcon);
  
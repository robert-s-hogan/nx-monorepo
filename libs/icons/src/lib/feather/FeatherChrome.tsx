
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherChromeIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherchrome'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherchrome ${combinedClassNames}`}
      {...otherProps}
    >
      <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  );
};

export const FeatherChrome = IconWrapper(FeatherChromeIcon);
  
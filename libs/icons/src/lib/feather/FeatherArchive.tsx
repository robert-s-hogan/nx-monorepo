
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherArchiveIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherarchive'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherarchive ${combinedClassNames}`}
      {...otherProps}
    >
      <polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>
    </svg>
  );
};

export const FeatherArchive = IconWrapper(FeatherArchiveIcon);
  
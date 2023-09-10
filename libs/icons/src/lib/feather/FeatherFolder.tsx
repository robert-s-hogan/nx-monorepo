
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherFolderIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherfolder'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherfolder ${combinedClassNames}`}
      {...otherProps}
    >
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
    </svg>
  );
};

export const FeatherFolder = IconWrapper(FeatherFolderIcon);
  
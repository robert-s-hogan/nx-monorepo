
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherUploadCloudIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featheruploadcloud'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featheruploadcloud ${combinedClassNames}`}
      {...otherProps}
    >
      <polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>
    </svg>
  );
};

export const FeatherUploadCloud = IconWrapper(FeatherUploadCloudIcon);
  
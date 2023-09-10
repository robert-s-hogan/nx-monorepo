
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherMinimize2Icon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherminimize2'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherminimize2 ${combinedClassNames}`}
      {...otherProps}
    >
      <polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>
    </svg>
  );
};

export const FeatherMinimize2 = IconWrapper(FeatherMinimize2Icon);
  
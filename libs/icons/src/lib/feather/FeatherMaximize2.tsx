
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherMaximize2Icon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feathermaximize2'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-feathermaximize2 ${combinedClassNames}`}
      {...otherProps}
    >
      <polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>
    </svg>
  );
};

export const FeatherMaximize2 = IconWrapper(FeatherMaximize2Icon);
  
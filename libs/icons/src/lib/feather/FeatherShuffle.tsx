
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherShuffleIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feathershuffle'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-feathershuffle ${combinedClassNames}`}
      {...otherProps}
    >
      <polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>
    </svg>
  );
};

export const FeatherShuffle = IconWrapper(FeatherShuffleIcon);
  

import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherCornerUpLeftIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feathercornerupleft'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-feathercornerupleft ${combinedClassNames}`}
      {...otherProps}
    >
      <polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
    </svg>
  );
};

export const FeatherCornerUpLeft = IconWrapper(FeatherCornerUpLeftIcon);
  

import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherShoppingBagIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feathershoppingbag'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-feathershoppingbag ${combinedClassNames}`}
      {...otherProps}
    >
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
  );
};

export const FeatherShoppingBag = IconWrapper(FeatherShoppingBagIcon);
  

import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherDollarSignIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherdollarsign'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherdollarsign ${combinedClassNames}`}
      {...otherProps}
    >
      <line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  );
};

export const FeatherDollarSign = IconWrapper(FeatherDollarSignIcon);
  
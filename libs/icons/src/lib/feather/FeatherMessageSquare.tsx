
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherMessageSquareIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feathermessagesquare'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-feathermessagesquare ${combinedClassNames}`}
      {...otherProps}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  );
};

export const FeatherMessageSquare = IconWrapper(FeatherMessageSquareIcon);
  

import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherPlayCircleIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherplaycircle'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherplaycircle ${combinedClassNames}`}
      {...otherProps}
    >
      <circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>
    </svg>
  );
};

export const FeatherPlayCircle = IconWrapper(FeatherPlayCircleIcon);
  
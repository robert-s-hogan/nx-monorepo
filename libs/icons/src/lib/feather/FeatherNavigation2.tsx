
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherNavigation2Icon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feathernavigation2'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-feathernavigation2 ${combinedClassNames}`}
      {...otherProps}
    >
      <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
    </svg>
  );
};

export const FeatherNavigation2 = IconWrapper(FeatherNavigation2Icon);
  

import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherNavigationIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feathernavigation'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-feathernavigation ${combinedClassNames}`}
      {...otherProps}
    >
      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
    </svg>
  );
};

export const FeatherNavigation = IconWrapper(FeatherNavigationIcon);
  
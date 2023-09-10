
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherShieldIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feathershield'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-feathershield ${combinedClassNames}`}
      {...otherProps}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );
};

export const FeatherShield = IconWrapper(FeatherShieldIcon);
  
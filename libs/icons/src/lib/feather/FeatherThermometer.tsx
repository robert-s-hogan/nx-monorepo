
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherThermometerIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherthermometer'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherthermometer ${combinedClassNames}`}
      {...otherProps}
    >
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
    </svg>
  );
};

export const FeatherThermometer = IconWrapper(FeatherThermometerIcon);
  
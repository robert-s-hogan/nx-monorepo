
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherBatteryIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherbattery'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherbattery ${combinedClassNames}`}
      {...otherProps}
    >
      <rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>
    </svg>
  );
};

export const FeatherBattery = IconWrapper(FeatherBatteryIcon);
  
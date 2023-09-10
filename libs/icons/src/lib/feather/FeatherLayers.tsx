
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherLayersIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherlayers'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherlayers ${combinedClassNames}`}
      {...otherProps}
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>
    </svg>
  );
};

export const FeatherLayers = IconWrapper(FeatherLayersIcon);
  
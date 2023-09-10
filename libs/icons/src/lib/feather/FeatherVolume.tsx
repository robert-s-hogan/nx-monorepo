
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherVolumeIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feathervolume'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-feathervolume ${combinedClassNames}`}
      {...otherProps}
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    </svg>
  );
};

export const FeatherVolume = IconWrapper(FeatherVolumeIcon);
  
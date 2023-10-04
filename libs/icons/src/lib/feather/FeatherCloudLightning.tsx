import DynamicIconWrapper from '../DynamicIconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherCloudLightningIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'feather-cloud-lightning'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-cloud-lightning ${combinedClassNames}`}
      {...props}
    >
      <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path>
      <polyline points="13 11 9 17 15 17 11 23"></polyline>
    </svg>
  );
};

export default DynamicIconWrapper(() =>
  Promise.resolve({ default: FeatherCloudLightningIcon })
);

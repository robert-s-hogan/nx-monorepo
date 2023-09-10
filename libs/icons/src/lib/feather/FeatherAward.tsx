
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherAwardIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featheraward'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featheraward ${combinedClassNames}`}
      {...otherProps}
    >
      <circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
  );
};

export const FeatherAward = IconWrapper(FeatherAwardIcon);
  

import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherUmbrellaIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherumbrella'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherumbrella ${combinedClassNames}`}
      {...otherProps}
    >
      <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>
    </svg>
  );
};

export const FeatherUmbrella = IconWrapper(FeatherUmbrellaIcon);
  
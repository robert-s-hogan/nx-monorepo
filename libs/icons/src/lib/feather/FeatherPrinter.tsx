
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const FeatherPrinterIcon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', 'featherprinter'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');

  // Ensure className is not passed again in the spread operation
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`feather feather-featherprinter ${combinedClassNames}`}
      {...otherProps}
    >
      <polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>
    </svg>
  );
};

export const FeatherPrinter = IconWrapper(FeatherPrinterIcon);
  
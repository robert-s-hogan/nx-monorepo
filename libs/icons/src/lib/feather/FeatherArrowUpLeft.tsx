
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const FeatherArrowUpLeftIcon = (props: CommonProps) => {
    const svgClassNames = ['font-awesome', 'feather-arrow-up-left'];
    const combinedClassNames = [...svgClassNames, props.className].join(' ');
  
    // Ensure className is not passed again in the spread operation
    const { className, ...otherProps } = props;
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className={`feather feather-arrow-up-left ${combinedClassNames}`}
        {...props}
      >
        <line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>
      </svg>
    );
  };
  
  export default IconWrapper(FeatherArrowUpLeftIcon);
    
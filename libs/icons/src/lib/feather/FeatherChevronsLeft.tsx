
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const FeatherChevronsLeftIcon = (props: CommonProps) => {
    const svgClassNames = ['font-awesome', 'feather-chevrons-left'];
    const combinedClassNames = [...svgClassNames, props.className].join(' ');
  
    // Ensure className is not passed again in the spread operation
    const { className, ...otherProps } = props;
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className={`feather feather-chevrons-left ${combinedClassNames}`}
        {...props}
      >
        <polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>
      </svg>
    );
  };
  
  export default IconWrapper(FeatherChevronsLeftIcon);
    
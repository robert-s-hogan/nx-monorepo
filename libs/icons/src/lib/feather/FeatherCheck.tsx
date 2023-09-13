
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const FeatherCheckIcon = (props: CommonProps) => {
    const svgClassNames = ['font-awesome', 'feather-check'];
    const combinedClassNames = [...svgClassNames, props.className].join(' ');
  
    // Ensure className is not passed again in the spread operation
    const { className, ...otherProps } = props;
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className={`feather feather-check ${combinedClassNames}`}
        {...props}
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    );
  };
  
  export default IconWrapper(FeatherCheckIcon);
    
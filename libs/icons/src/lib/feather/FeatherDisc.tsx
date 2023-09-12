
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const FeatherDiscIcon = (props: CommonProps) => {
    const svgClassNames = ['font-awesome', 'feather-disc'];
    const combinedClassNames = [...svgClassNames, props.className].join(' ');
  
    // Ensure className is not passed again in the spread operation
    const { className, ...otherProps } = props;
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className={`feather feather-disc ${combinedClassNames}`}
        {...props}
      >
        <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>
      </svg>
    );
  };
  
  export default IconWrapper(FeatherDiscIcon);
    

  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const FeatherNavigation2Icon = (props: CommonProps) => {
    const svgClassNames = ['font-awesome', 'feather-navigation2'];
    const combinedClassNames = [...svgClassNames, props.className].join(' ');
  
    // Ensure className is not passed again in the spread operation
    const { className, ...otherProps } = props;
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className={`feather feather-navigation2 ${combinedClassNames}`}
        {...props}
      >
        <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
      </svg>
    );
  };
  
  export default IconWrapper(FeatherNavigation2Icon);
    
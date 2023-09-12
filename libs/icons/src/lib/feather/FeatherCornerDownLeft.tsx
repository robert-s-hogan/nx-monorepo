
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const FeatherCornerDownLeftIcon = (props: CommonProps) => {
    const svgClassNames = ['font-awesome', 'feather-corner-down-left'];
    const combinedClassNames = [...svgClassNames, props.className].join(' ');
  
    // Ensure className is not passed again in the spread operation
    const { className, ...otherProps } = props;
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className={`feather feather-corner-down-left ${combinedClassNames}`}
        {...props}
      >
        <polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
      </svg>
    );
  };
  
  export default IconWrapper(FeatherCornerDownLeftIcon);
    

  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const FeatherPlayIcon = (props: CommonProps) => {
    const svgClassNames = ['font-awesome', 'feather-play'];
    const combinedClassNames = [...svgClassNames, props.className].join(' ');
  
    // Ensure className is not passed again in the spread operation
    const { className, ...otherProps } = props;
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24" height="24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className={`feather feather-play ${combinedClassNames}`}
        {...props}
      >
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    );
  };
  
  export default IconWrapper(FeatherPlayIcon);
    
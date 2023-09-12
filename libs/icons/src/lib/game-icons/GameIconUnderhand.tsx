
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconUnderhandIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'underhand'];
    const combinedClassNames = [...svgClassNames, props.className].join(' ');
  
    // Ensure className is not passed again in the spread operation
    const { className: propClassName, ...otherProps } = props;
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className={`game-icon ${combinedClassNames}`}
        {...otherProps}
      >
        <path fill="currentColor" d="M44.142 366.824c95.92 0 99.81-1.297 99.81-1.297 123.716 201.064 221.662-72.51 234.36-171.483l-36.24-.158 70.897-123.76 68.082 123.38-35.26 1.454c-81.335 283.797-299.33 296.3-401.65 171.864z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconUnderhandIcon);
    
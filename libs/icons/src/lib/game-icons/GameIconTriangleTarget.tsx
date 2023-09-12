
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTriangleTargetIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'triangle-target'];
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
        <path fill="currentColor" d="M247 65.16L32.34 440.8l61.79-35.7L247 137.6zm18 .38V137l158.3 271.3 62.7 36.1C412.2 318.2 338.6 191.8 265 65.54zM415.4 424.5l-321.3 1.4-62.72 36.2 445.82-1.9z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTriangleTargetIcon);
    
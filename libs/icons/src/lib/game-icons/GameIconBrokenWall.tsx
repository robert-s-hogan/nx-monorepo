
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBrokenWallIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'broken-wall'];
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
        <path fill="currentColor" d="M494 18.02l-101 .103V119h101zm-119 .12l-56.29 12.065-31.01 64.361-101.534-35.952L137 119h238zM18 137v61.63l12.416 31.981L62.575 247H247V137zm247 0v110h229V137zM76.294 322.591L18 332.203V375h101V265H65.317zM137 265v110h238c-48.428-109.932-.057-1.24-48.222-110zM18 393v100.98l199-.236L247 393zm247 0v55.79c66.067 45.222-.134-.028 65.798 44.869L494 493.49V393z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBrokenWallIcon);
    
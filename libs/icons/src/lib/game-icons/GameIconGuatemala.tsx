
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconGuatemalaIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'guatemala'];
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
        <path fill="currentColor" d="M190.8 25.24l175.1 1.08-.1 215.08 27.3-.9 78 19.9-97.3 76.3-20.5 68.7-84.7 81.4c-106.1-3.9-179.25-36.3-227.72-90l31.21-136.1 44.61-40.2 117.8-2.1c-.5-50.9-50.7-91.8-109.5-130.92l47 3.81z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconGuatemalaIcon);
    

  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDodgeIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'dodge'];
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
        <path fill="currentColor" d="M465.074 481.646c-24.928 1.186-334.495-.667-334.495-.667-188.07-188.857 283.16-251.37-8.1-406.484l-20.382 21.487-27.14-71.216 87.582 6.818-17.534 19.7c364.276 106.15-48.98 305.105 320.068 430.36z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDodgeIcon);
    
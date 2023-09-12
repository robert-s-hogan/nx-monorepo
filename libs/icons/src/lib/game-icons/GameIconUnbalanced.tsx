
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconUnbalancedIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'unbalanced'];
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
        <path fill="currentColor" d="M404.5 162.5c-26.1 0-47 20.9-47 47s20.9 47 47 47 47-20.9 47-47-20.9-47-47-47zm72.2 89.1l-447.99 176 6.58 16.8 448.01-176-6.6-16.8zM121.2 287l-87.28 35 29 72.4 87.28-35-29-72.4zM256 383l-78 104h156l-78-104z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconUnbalancedIcon);
    

  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPaperPlaneIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'paper-plane'];
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
        <path fill="currentColor" d="M480 40L32 296l112.148 37.383L448 72 209.404 355.135 320 392 480 40zM208 376l-16 96 49.932-83.863L208 376z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPaperPlaneIcon);
    
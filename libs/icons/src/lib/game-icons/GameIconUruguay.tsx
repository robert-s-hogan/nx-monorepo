
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconUruguayIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'uruguay'];
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
        <path fill="currentColor" d="M86.627 56.843l86.84-33.014c98.7 82.092 216.765 136.019 295.685 246.884-65.653 71.335-17.208 71.745-20.095 104.064C426.444 500.632 315.248 482.712 225.14 488.17c-47.279-23.845-88.53-54.013-128.466-46.65l-53.826-49.52z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconUruguayIcon);
    
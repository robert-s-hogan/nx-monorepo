
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTankTopIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'tank-top'];
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
        <path fill="currentColor" d="M128 37l32-6c16 112 32 150 96 150s80-38 96-150l32 6s-16 160 32 208c0 96 0 112 16 224-112 16-240 16-352 0 16-112 16-128 16-224 48-48 32-208 32-208z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTankTopIcon);
    
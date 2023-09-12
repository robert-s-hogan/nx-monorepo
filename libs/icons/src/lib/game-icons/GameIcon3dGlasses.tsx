
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIcon3dGlassesIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', '3d-glasses'];
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
        <path fill="currentColor" d="M176 80L39.36 247h77.74L176 144l32 48v-48l-32-64zm160 0l-32 64v48l32-48 58.9 103h77.7L336 80zM25 265v174h194.2l36.8-55.2 36.8 55.2H487V265H25zm23 23h176v64l-32 64H48V288zm240 0h176v128H320l-32-64v-64z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIcon3dGlassesIcon);
    
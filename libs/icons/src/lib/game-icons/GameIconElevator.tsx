
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconElevatorIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'elevator'];
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
        <path fill="currentColor" d="M153 35v58h206V35H153zm60.3 13h32l-16 32-16-32zm74.7 0l16 32h-32l16-32zm-183 89v350h142V137H105zm160 0v350h142V137H265zm173 141v84h52v-84h-52zm26 26a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconElevatorIcon);
    
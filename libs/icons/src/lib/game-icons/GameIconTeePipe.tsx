
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTeePipeIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'tee-pipe'];
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
        <path fill="currentColor" d="M25 115v154h30V115zm432 0v154h30V115zM73 128v128h103.8l40-53.4 14.4 10.8-39.2 52.3V439h128V265.7l-39.2-52.3 14.4-10.8 40 53.4H439V128zm23 23h320v18H96zm119 137h18v128h-18zm-36 169v30h154v-30z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTeePipeIcon);
    
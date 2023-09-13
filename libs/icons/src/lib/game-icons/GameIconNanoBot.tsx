
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconNanoBotIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'nano-bot'];
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
        <path fill="currentColor" d="M144 26.43L76.99 65.1v77.4l20.09 11.6 39.32-62.87 15.2 9.57-38.9 62.3 31.3 18.1 67-38.7V131h90v11.5l67 38.7 31.3-18.1-38.9-62.3 15.2-9.57 39.3 62.87 20.1-11.6V65.13l-67-38.7-67 38.67V77h-90V65.13zM211 95h90v18h-90zm22 90v68.3l14 21V480h18V274.3l14-21V185zm-17.6 74.2L118 332.3 151.2 482l17.6-4L138 339.7l87.3-65.5zm81.2 0l-9.9 15 87.3 65.5L343.2 478l17.6 4L394 332.3z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconNanoBotIcon);
    
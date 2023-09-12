
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTelescopicBatonIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'telescopic-baton'];
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
        <path fill="currentColor" d="M327.672 195.564L438.26 84.986a25.535 25.535 0 1 0-11.828-11.922l-110.683 110.63zM151.888 336.86l23.75 23.75L65.66 470.581a16.794 16.794 0 0 1-23.75-23.751zm149.808-143.522l16.33 16.33-134.79 134.79-16.33-16.33z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTelescopicBatonIcon);
    
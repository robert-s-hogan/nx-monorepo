
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconKnightBannerIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'knight-banner'];
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
        <path fill="currentColor" d="M256 23.57l-16.1 48.86h32.2zM73 90.43v15.97h366V90.43zm48 33.97V479l135-105 135 105V124.4zm87 37h96l-32 80 80-32v96l-80-32 32 80h-96l32-80-80 32v-96l80 32zm48 235.4l-23 17.9v73.7h46v-73.7z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconKnightBannerIcon);
    
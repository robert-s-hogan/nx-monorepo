
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconStarFlagIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'star-flag'];
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
        <path fill="currentColor" d="M256 37C171.8 37 87.37 48.66 41 69.77V306.1C93.09 284.8 174.3 275 256 275c81.7 0 162.9 9.8 215 31.1V69.77C424.6 48.66 340.2 37 256 37zm.1 13.1l35.3 69.2 76.7 12.2-54.9 55 12.2 76.7-69.3-35.2-69.2 35.2 12-76.7-54.8-55 76.7-12.2 35.3-69.2zm-97.9 133.1l3.6 17.6-80.03 16-3.54-17.6 79.97-16zm195.6 0l80 16-3.6 17.6-80-16 3.6-17.6zM73 314.3c-6.35 1.8-12.38 3.7-18 5.8V480h18V314.3zm366 0V480h18V320.1c-5.6-2.1-11.7-4-18-5.8z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconStarFlagIcon);
    
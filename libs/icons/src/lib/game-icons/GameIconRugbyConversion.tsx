
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconRugbyConversionIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'rugby-conversion'];
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
        <path fill="currentColor" d="M247 18v135.193c5.95-3.097 11.95-6.065 18-8.89V18h-18zm192 0v247.6l-174-.688v-60.457c-6.182 5.902-12.18 11.908-18 18V311h18v-28.088l174 .688V311h18V18h-18zm-80.1 71.914c-7.024-.18-15.588 2.472-20.54 6.463-7.925 6.386-14.468 22.533-9.155 29.127 5.313 6.594 22.48 3.634 30.406-2.752 7.926-6.386 14.47-22.533 9.158-29.127-1.993-2.473-5.653-3.602-9.868-3.71zm-54.125 57.334C168.5 198.266 48.38 324.17 25.043 471.803l17.316 3.365c15.157-100.106 61.737-149.502 92.28-179.856C120.173 337.77 79.376 405.92 78.27 482.145l21.605 4.2c4.238-108.047 78.028-244.59 204.902-339.097zM241.068 329v158h30V329h-30zm191.618 0v158h30V329h-30z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconRugbyConversionIcon);
    
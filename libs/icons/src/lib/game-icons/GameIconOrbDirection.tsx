
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconOrbDirectionIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'orb-direction'];
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
        <path fill="currentColor" d="M255.78 21C128.098 21 23.47 125.628 23.47 253.313c0 127.685 104.627 230.78 232.31 230.78 127.685 0 230.782-103.095 230.782-230.78S383.466 21 255.782 21zm-1.06 82l117.374 117.97-23.938 25.093-65.406-37.938v172.47c79.295-13.13 139.78-81.987 139.78-165 0-39.265-13.54-75.368-36.186-103.907 37.702 35.365 61.22 85.81 61.22 141.625-.002 106.395-85.385 191.78-191.783 191.78-106.398 0-193.31-85.385-193.31-191.78 0-55.123 23.342-105.018 60.624-140.313-22.028 28.33-35.156 63.928-35.156 102.594 0 82.46 59.645 150.973 138.156 164.75v-168.72l-62.5 35.626-25.094-26.28L254.72 103z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconOrbDirectionIcon);
    
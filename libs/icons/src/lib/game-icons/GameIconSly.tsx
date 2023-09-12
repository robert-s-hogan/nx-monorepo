
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSlyIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'sly'];
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
        <path fill="currentColor" d="M23.563 75.28C17.71 179.527 82.54 207.685 181.875 198.688 158.455 135.47 111.857 89.686 23.563 75.28zm474.625 0c-88.295 14.405-134.894 60.19-158.313 123.407 99.334 8.997 164.164-19.16 158.313-123.406zM55.03 283.53c20.276 35.905 40.59 66.526 60.908 91.876 96.78 28.22 194.46 26.484 293.406-1.312 19.378-25.143 38.59-55.332 57.594-90.563-121.66 108.32-286.123 103.457-411.907 0zM389.407 398.19c-84.598 20.145-168.747 21.634-252.22 1.812 85.106 90.85 170.073 89.535 252.22-1.813z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSlyIcon);
    
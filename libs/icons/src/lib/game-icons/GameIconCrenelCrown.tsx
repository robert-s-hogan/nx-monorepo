
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCrenelCrownIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'crenel-crown'];
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
        <path fill="currentColor" d="M256 68.02L169.7 240.7l14.8 44.5-17 5.6-15.2-45.6-66.42-53-12.18 60.9 12.62 12.6-12.66 12.6-15.21-15.2-30.53-20.4 25.15 163.4 39.17-65.2 89.66 35.8 30.9 46.4h86.4l30.9-46.4 89.7-35.8 39.1 65.2 25.2-163.4-30.6 20.4-15.2 15.2-12.6-12.6 12.6-12.6-12.2-60.9-66.4 53-15.2 45.6-17-5.6 14.8-44.5zm0 122.58l55.7 92.8 1.9 3.2-17.5 70-20.4 20.3h-39.4l-20.4-20.3-17.5-70zm0 34.8l-38.4 64 14.5 58 11.6 11.7h24.6l11.6-11.7 14.5-58z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCrenelCrownIcon);
    
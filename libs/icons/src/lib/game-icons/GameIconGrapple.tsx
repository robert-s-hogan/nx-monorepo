
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconGrappleIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'grapple'];
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
        <path fill="currentColor" d="M337.6 24.24l-86 87.96 61.3-21.32c2.2 27.22 4.6 54.42 6.8 81.82l-18.6 1.6c-8.5 8.3-17 16.9-25.5 25.4l25.8 25.8 25.2-25.1 2.4-17.6c29.2 3.8 57.9 7.9 87.1 11.5l-19.7 44.5 94.9-68c-38.3-8-76.6-15.6-114.9-23.3l3.7-18.3 22.9 4.6 16.2-57.25-53.3 19.56 3.3 28.09-18.6 2.2-3.8-32.96c-3-23.07-6.1-46.13-9.2-69.2zm-106 103.96L183.1 211l66-42.7 24.4 7 25.6-25.5-.3-3-67.2-18.6zm117.5 76.1l-19.2 19.2 4.5 11-49.3 73.6 90.3-55.2-17-47.4zM270 220.6c-2.7 43.5-37.2 77.4-79.1 77.3-54.3 0-98.09 45.8-98.08 101.6 0 43.5-31.73 78.7-72.07 82.5v13.1h25.9c37.86-14.2 64.85-51.8 64.85-95.6 0-46.1 35.6-82.9 79.4-82.9 46.9 0 85.9-34.2 95.7-79.5-5.5-5.5-11-11-16.6-16.5z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconGrappleIcon);
    
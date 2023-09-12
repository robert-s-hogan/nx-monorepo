
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSunglassesIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'sunglasses'];
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
        <path fill="currentColor" d="M131.127 175.44c-33.59.04-59.132 7.456-86.086 15.046-8.453 1.495-15.128 3.99-18.638 10.47-3.532 6.524-1.073 13.252 1.537 17.888 4.818 8.555 12.362 16.51 15.298 21.703 3.465 17.812 8.065 35.346 15.467 50.7 12.98 26.928 36.845 47.046 74.7 45.194 46.849-2.29 73.352-20.134 87.503-41.22 14.152-21.088 16.572-44.617 19.54-56.484 7.612-16.64 23.278-16.838 31.105 0 2.967 11.867 5.387 35.396 19.54 56.483 14.15 21.086 40.654 38.93 87.503 41.22 37.854 1.853 61.72-18.265 74.7-45.192 7.403-15.355 12-32.89 15.466-50.7 2.936-5.195 10.48-13.15 15.3-21.704 2.61-4.636 5.068-11.364 1.536-17.887-3.51-6.48-10.185-8.976-18.64-10.47-26.953-7.59-52.495-15.007-86.085-15.048-26.88-.033-58.915 4.656-100.97 17.753l-5.507 1.715c-18.397 3.264-18.395 3.264-36.792 0l-5.506-1.715c-42.056-13.097-74.092-17.786-100.97-17.754zm.146 16.55c23.79.02 52.275 4.346 90.288 15.772 2.44 6.41 5.193 17.415 2.118 28.304-3.397 14.196-5.85 33.31-16.85 49.704-11.352 16.916-31.195 31.63-74.25 33.736-32.043 1.568-47.433-12.454-58.6-35.62-6.38-13.23-10.624-29.463-13.982-46.6l.037-.01-4.05-32.26c24.43-6.927 46.61-13.05 75.29-13.026zm249.452 0c28.68-.023 50.863 6.098 75.293 13.026l-4.05 32.26.036.01c-3.358 17.137-7.603 33.37-13.98 46.6-11.17 23.166-26.56 37.188-58.602 35.62-43.055-2.107-62.9-16.82-74.252-33.736-11-16.393-13.45-35.508-16.848-49.704-2.605-13.286-.322-21.894 2.115-28.304 38.013-11.426 66.497-15.752 90.288-15.772zM133.94 202.52c-18.563.07-37.993 3.335-53.94 11.652-12.87 42.026 3.515 64 16 80 1.317-37.663-15.127-81.69 96-80-11.76-6.544-34.194-11.74-58.06-11.65zm231.88 0c-18.563.07-37.992 3.335-53.94 11.652-12.87 42.026 3.515 64 16 80 1.317-37.663-15.126-81.69 96-80-11.76-6.544-34.193-11.74-58.06-11.65z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSunglassesIcon);
    
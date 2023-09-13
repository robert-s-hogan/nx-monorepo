
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconJumpAcrossIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'jump-across'];
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
        <path fill="currentColor" d="M295.883 20.338c-14.656-.098-30.21 16.152-37.057 29.625-8.19 16.117-14.16 43.37-5.826 58.734l-13.63 6.483c-5.76-3.823-46.376-13.28-63.386-10.748-27.583 6.662-52.99 20.944-78.793 33.84l12.165 26.667c23.13-10.42 42.92-28.464 69.89-30.424 21.533-1.566 34.608 11.535 50.786 18.552-1.066 68.896-16.84 101.175-54.03 160.44-26.528 16.792-61.213 17.727-94.11 22.693l12.62 28.323c40.826-5.42 80.217-10.064 108.947-26.65 58.103-41.767 85.666-62.308 148.543-92.38 30.3 9.43 41.237 39.108 55.03 61.048l24.163-22.63c-12.5-27.36-44.15-61.68-79.193-84.066-22.694 7.043-44.088 17.01-64.133 30.01 6.64-24.67 6.65-44.777-1.678-69.448 18.79 6.873 36.892 10.287 54.28 10.137 27.537-20.4 42.684-46.306 62.66-70.066L384 84.564c-16.46 18.927-25.97 37.853-49.404 56.78-16.322-1.3-32.255-8.444-48.114-16.69l-2.732-7.615c15.41-6.64 30.163-24.084 35.334-38.8 6.553-18.647 1.573-50.056-17.004-56.804-2.03-.738-4.103-1.084-6.197-1.098zM18 384v110h142V384H18zm334 0v110h142V384H352z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconJumpAcrossIcon);
    

  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTargetLaserIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'target-laser'];
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
        <path fill="currentColor" d="M61 16L16 61l195 180 195 165-165-195L61 16zm314.97 240c-21.068.066-42.135 5.635-60.876 16.656l45.406 45.406c10.03-2.64 20.587-2.446 30.594.157l45.75-45.75v-.064c-18.757-11.03-39.81-16.472-60.875-16.406zm-103.314 59.156c-22.027 37.48-22.31 84.238-.25 121.75l45.75-45.75c-2.56-10.002-2.73-20.594-.094-30.625l-45.406-45.374zm206.938 0l-45.75 45.75c2.556 10.007 2.73 20.565.094 30.594l45.406 45.406c22.03-37.48 22.312-84.24.25-121.75zM360.906 433.844l-45.75 45.75c37.514 22.06 84.27 21.788 121.75-.25L391.5 433.938V434c-10.03 2.64-20.592 2.45-30.594-.156z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTargetLaserIcon);
    
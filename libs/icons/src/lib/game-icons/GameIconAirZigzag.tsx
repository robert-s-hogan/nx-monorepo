
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAirZigzagIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'air-zigzag'];
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
        <path fill="currentColor" d="M 185.90107,21.667141 C 273.66638,103.1344 325.90096,190.87541 363.18841,289.15305 275.49038,184.91376 242.31441,163.72278 116.88975,109.32966 208.45258,181.54047 226.10768,200.34679 279.72895,286.04514 209.68602,233.82364 113.352,182.99257 20.763168,155.41009 l 0,85.40121 c 95.446312,24.53997 244.609212,97.10025 311.841382,175.21478 -0.6242,-25.57532 -3.9844,-51.14691 -14.51542,-76.72223 l 108.86098,111.97263 c -6.54474,-34.00574 -20.51072,-67.18544 -41.9895,-99.52977 L 499.0058,468.38214 C 461.7632,292.83657 343.06642,104.33981 185.90294,21.667141 Z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAirZigzagIcon);
    
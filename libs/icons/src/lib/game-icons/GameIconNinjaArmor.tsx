
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconNinjaArmorIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'ninja-armor'];
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
        <path fill="currentColor" d="M325.41 32.18L222.562 237.879h13.711l13.364-13.363 6.363-6.364 19.727 19.727H346l74.947-179.873c-8.11-4.986-23.97-11.715-41.314-16.445-19.05-5.196-39.628-8.654-54.223-9.381zm-139.205.021c-14.576.771-34.953 4.21-53.838 9.36-17.344 4.73-33.204 11.46-41.314 16.445L166 237.879h36.44l38.722-77.445zm29.25 22.563l36.25 84.584 41.984-83.971c-26.948 5.752-51.079 5.561-78.234-.613zM88.416 98.478l-43.691 65.54 65.88 39.529 15.24-15.24zm335.168 0l-37.43 89.829 15.24 15.24 65.881-39.53zM256 243.605l-20.42 20.42 20.42 30.63 20.42-30.63zM153 255.88v30h75.518l-16.098-24.147 5.853-5.853zm140.727 0l5.853 5.853-16.098 24.147H359v-30zm-129.125 48l-26.045 165.24c114.22 14.268 120.666 14.268 234.886 0l-26.045-165.24h-75.916L256 327.102l-15.482-23.223z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconNinjaArmorIcon);
    
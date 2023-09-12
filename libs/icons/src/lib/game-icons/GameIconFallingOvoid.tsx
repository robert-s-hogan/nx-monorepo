
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFallingOvoidIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'falling-ovoid'];
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
        <path fill="currentColor" d="M184.97 21.875l66.718 179.03L27 25l178.344 216.406L23.22 163.22l175.186 146.56L49.5 298.595l183.594 85.72-88.875 38.936 154.155 18.094-21.063 56.22 96.22-34.814 32.968 35.22 28.22-56.22 56.06-17.438L462.5 385l40.875-85-55.344 10.563-7.686-146.063-44.406 77.5-74.313-181.188 1.125 140.313-137.78-179.25zm95.874 237.03c16.315-.184 40.993 12.932 63 34.94 29.342 29.34 42.85 63.397 30.156 76.092-12.695 12.696-46.783-.782-76.125-30.125-29.342-29.342-42.85-63.43-30.156-76.125 3.173-3.173 7.685-4.72 13.124-4.78zm96.72 37.345c37.93 3.08 67.592 34.657 67.592 73.406 0 40.8-32.887 73.656-73.687 73.656-40.057 0-72.43-31.67-73.595-71.437 8.263 23.457 30.67 40.375 56.875 40.375 33.176 0 60.25-27.106 60.25-60.28 0-25.107-15.517-46.69-37.438-55.72z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFallingOvoidIcon);
    
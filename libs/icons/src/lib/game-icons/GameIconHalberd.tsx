
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHalberdIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'halberd'];
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
        <path fill="currentColor" d="M235.03 28.875l-56.718 24.72 104.75 104.75c20.144 20.136 20.144 53.105 0 73.25-20.142 20.142-53.11 20.14-73.25 0l-104.437-104.44-20.688 51.782C113.004 210 131.48 257.957 135 307.375c1.212 17.01.622 34.248-2.094 50.97 149.04-19.577 267.116-137.07 285.531-283.47-17.79 3.418-36.113 4.446-54.156 3.406-49.99-2.88-98.137-21.155-129.25-49.405zm258 12.344c-16.42 13.404-35.253 22.85-55.217 28.905-16.75 160.278-146.32 289.245-309.063 307.563 0 .002-.03-.003-.03 0-5.427 19.857-14.23 38.525-27 54.625 77.81-1.162 148.893-22.316 208.5-58.688l106.655 6.563L419 273.625c46.883-64.243 73.995-144.145 74.03-232.406zm-289.405 64.124l-46.875 46.75 44.406 44.406 46.875-46.75-44.405-44.406zM90.155 218.53L19.97 288.563v88.782l93.25-93.063c-4.38-23.864-12.445-46.66-23.064-65.75z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHalberdIcon);
    
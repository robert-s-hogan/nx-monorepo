
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconGliderIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'glider'];
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
        <path fill="currentColor" d="M247.989 307.923l.88.88-118.47 118.42c-22.74 22.79-76.09 54.47-76.09 54.47a17.21 17.21 0 0 1-22.18-26.16l181.72-181.71zm231.86-275.77a17.21 17.21 0 0 0-24.33 0l-181.72 181.72 34.1 34.1.88.88 118.42-118.43c22.74-22.74 54.47-76.09 54.47-76.09a17.21 17.21 0 0 0-1.82-22.18zm-52.44 319.24a32.78 32.78 0 0 0-23.25 9.62l-43.17 43.17a32.89 32.89 0 0 0 0 46.51l6 6 89.69-89.68-6-6a32.78 32.78 0 0 0-23.27-9.62zm-46.8 10.55l-18.69 18.69c-40.87-40.64-64.22-62-102.66-84l-39.27-39.32c-64-64-65.14-86.41-57.12-94.44 1.91-1.91 4.76-3.29 9-3.29 12.64 0 37.47 12.43 85.46 60.41l39.29 39.29c21.95 38.47 43.37 61.8 83.99 102.66zm-156.89-162.82c-34.3-29.84-49.85-33.11-53.79-29.17-2.7 2.7-1.91 8.38 2.33 16.9 4.91 9.84 13.88 22.21 26.79 36.94z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconGliderIcon);
    
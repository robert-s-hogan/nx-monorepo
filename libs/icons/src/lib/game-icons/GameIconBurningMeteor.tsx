
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBurningMeteorIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'burning-meteor'];
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
        <path fill="currentColor" d="M107.5 18c40.728 58.21-63.708 25.914-88.03 2.47 1.058 40.082 100.03 99.633 147.374 72.124C195.904 75.71 136.984 22.936 107.5 18zm97.75 57.28l.875 1.47c120.364 99-4.023 175.247-64.97 48.78 15.823 82.506-78.425 44.2-89.655-30.655C-13.17 230.463 172.715 231.293 178.438 324c3.23 52.3-77.82 19.908-113.875-48.844C308.49 797.09 814.024 262.64 205.25 75.28zm134.97 136.376c44.577 0 85.52 18.708 109.56 52.5 43.656 75.614-63.777 27.4-70.717-8.844-21.45 58.675 101.883 114.72 16 170.375 25.962-34.188 2.345-113.552-87.875-109.125 116.512 72.473 42.326 206.9-19.688 93.157 1.306 35.083 11.99 54.83 27.156 64.436-60.89-11.955-107.03-65.528-107.03-129.906 0-39.06 16.94-74.22 43.874-98.5 1.674 61.897 83.61 37.656 115.97 62.344-11.544-60.34-56.022-59.933-82.72-84.28 16.883-7.803 35.67-12.158 55.47-12.158zM234.72 309c-1.386.015-2.724.112-4.064.25 26.032 6.737 74.684 83.827 33.875 61.75 3.41 14.6 43.038 41.75 57.5 21.156 18.816-26.79-44.374-83.634-87.31-83.156z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBurningMeteorIcon);
    
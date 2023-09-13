
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconNeedleJawsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'needle-jaws'];
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
        <path fill="currentColor" d="M30.168 102.43C-34.42 255.564 225.603 466 326.388 482.01c36.74 5.836 109.387-93.303 130.944-124.62-32.686 37.326-108.077 104.35-121.946 95.068-14.908-9.98 46.04-88.917 72.323-137.386-35.216 42.393-122.76 115.38-136.622 107.56-12.225-6.897 37.388-82.313 58.55-121.462-29.417 33.236-98.877 93.256-110.383 86.967-11.204-6.122 28.88-73.8 49.054-110.033-24.97 26.415-82.02 78.025-91.383 70.56-8.37-6.67 28.014-63.215 42.05-90.63-21.85 25.083-71.967 65.835-81.57 56.175-8.51-8.564 25.162-62.032 36.928-88.987-19.023 19.976-67.458 56.563-75.562 45.07-7.567-10.735 20.135-58.707 32.126-83.854-17.518 20.437-61.795 50.78-69.34 36.288-5.557-10.677 14.54-47.267 22.69-65.4-12.726 11.458-39.503 25.235-44.53 12.902 2.505-34.28 20.022-75.272 50.244-86.8 5.65 3.223 6.79 33.026 3.874 50.74 6.19-18.967 31.434-61.29 43.58-51.016 7.92 6.698 2.302 53.597 1.682 71.46 6.64-26.364 36.297-88.395 49.777-79.137 8.686 5.964 3.02 77.425-4.936 101.378 12.532-21.33 40.73-102.7 52.875-96.422 11.26 5.824 6.45 80.195 1.366 112.52 10.057-34.37 41.118-113.07 54.18-107.677 9.263 3.823 6.265 77.094-3.595 115.908 10.948-29.238 47.873-112.855 59.338-109.81 11.466 3.044 2.763 86.558-2.934 123.952 12.11-35.486 45.12-121.676 59.057-117.82 12.738 3.526 4.384 99.27-2.134 140.53 15.418-36.996 50.685-135.855 65.91-128.55 15.522 7.444-5.206 126.565-8.118 149.87 17.282-34.38 46.654-148.113 29.962-176.66-117.27-25.592-424.52-63.63-459.68 19.726z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconNeedleJawsIcon);
    
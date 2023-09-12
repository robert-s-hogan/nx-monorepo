
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMetalHandIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'metal-hand'];
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
        <path fill="currentColor" d="M283.688 18.813c-38.33 25.823-51.42 66.972-57.282 113.437l57.938 2.97c-2.787-42.22-3.627-85.758-.656-116.407zm-98.313 4.375c-35.286 31.43-43.448 76.698-44.75 126.53l54.813-6.187c-6.11-43.135-10.502-88.38-10.063-120.343zm200.594 24.25c-28.798 31.16-56.436 70.27-67.658 113.5l59.438 13.187c1.11-42.06 3.945-91.463 8.22-126.688zM90.155 65.06c-30.32 35.04-33.082 79.895-28.312 128.375L114.812 180c-11.28-41.052-21.046-83.966-24.656-114.938zM229.97 151.19c-5.35 38.24-6.93 79.505-4.5 116.593l43.905-4.31c3.854-.38 7.62-.625 11.28-.72-2.135-38.26-4.094-73.888-4.624-109.22l-46.06-2.343zm-38.095 11.53l-44.594 5.063c-.775 37.416 1.78 75.885 6.782 107.032l48.625-4.78-10.812-107.313zm130.688 18.313c-7.007 27.123-12.36 56.088-15.782 83.72 17.464 3.32 31.8 10.584 42.876 20.97 2.85 2.67 5.467 5.517 7.875 8.53L367.44 191l-44.875-9.97zM112.78 199.813l-40.81 10.313c3.534 26.614 9.47 53.31 16.405 76.563 5.11-3.96 11.43-6.54 18.344-7.22l25.405-2.5-19.344-77.156zM490.94 262.72c-10.24 26.004-30.77 42.114-61.532 63.092l32.75 47c31.33-30.658 40.613-67.443 28.78-110.093zm-208.47 18.655c-3.582.068-7.336.302-11.25.688l-162.656 16c-4.92.484-7.92 2.12-10.718 5.218-2.797 3.1-5.212 8.038-6.78 14.75-3.14 13.427-2.588 33.404 1.06 55.19 6.962 41.56 24.88 89.976 42.314 118.686h30.5L138.375 330.25l18.438-3.03 27.062 164.686h32.438l-10.032-169.78L224.938 321l10.125 170.906h31.563l9.344-172.156 18.686 1.03-9.28 171.126h39.843c23.722-35.09 40.288-91.7 35.686-136.594-2.382-23.244-10.14-42.914-24.03-55.937-12.155-11.395-29.33-18.476-54.407-18zm135.626 60.844c-12.445 5.68-25.504 10.022-38.5 12.655 1.982 21.14.153 43.672-4.625 65.594 25.43-8.55 49.294-22.796 68.717-41.47l-25.593-36.78z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMetalHandIcon);
    
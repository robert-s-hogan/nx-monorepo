
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMagnetIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'magnet'];
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
        <path fill="currentColor" d="M146.063 25.656c-30.86.074-60.556 12.052-85.094 36.313C3.285 119 12.986 194.422 63.905 245.343c12.042 12.04 47.124 35.39 78.75 55.437l36.938-36.967c-23.064-18.33-46.265-37.235-54.375-45.344-38.193-38.193-42.604-75.96-13.44-105.126 29.167-29.166 66.482-24.61 105.126 14.03 8.09 8.09 26.932 31.048 45.22 53.907l37.03-37.03c-20.045-31.623-43.335-66.74-55.375-78.78-30.685-26.483-64.868-39.892-97.718-39.814zM309.375 160.47L273.845 196c13.103 16.54 24.525 31.2 29.5 37.656l31.53-31.53s-10.95-18.314-25.5-41.657zm54.125 33.124c-31.963 73.943-90.175 135.65-167.313 169.22 96.67-10.858 166.86-86.763 167.313-169.22zm58.438 0C378.812 293.36 300.23 376.616 196.155 421.906c130.426-14.648 225.167-117.06 225.78-228.312zm72.53 0C437.49 325.414 333.7 435.407 196.19 495.25c172.33-19.356 297.47-154.66 298.28-301.656zM194.345 275.5l-35.438 35.438c23.348 14.552 41.656 25.5 41.656 25.5l31.532-31.532c-6.443-4.963-21.143-16.33-37.75-29.406z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMagnetIcon);
    

  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSteakIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'steak'];
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
        <path fill="currentColor" d="M294.818 43.27c-.957.003-1.917.014-2.88.035-46.15.993-96.56 23.687-128.614 54.82-41.965 40.758-91.926 108.163-118.896 173.047-13.486 32.442-21.17 64.22-19.93 91.305 1.24 27.085 10.723 49.188 32.54 65.546 15.71 11.78 28.638 10.986 44.814 2.72 16.175-8.268 34.067-25.324 52.433-45.405 36.732-40.162 74.766-92.452 121.008-107.932 61.794-20.685 98.278-34.43 120.926-46.785 22.646-12.353 31.392-22.466 40.74-39.08 7.302-12.974 8.365-26.067 5.03-39.882-3.334-13.814-11.388-28.167-22.45-41.62-22.127-26.903-56.253-49.946-83.706-60.003-12.75-4.67-26.652-6.79-41.016-6.764zm3.418 24.26c21.21-.103 42.145 4.338 58.493 16.677 47.554 35.895 86.454 58.96 54.377 111.88-32.076 52.923-177.004 58.17-217.56 20.06-1.663-10.596-12.613-91.45 10.176-121.653 12.52-10.007 54.02-26.77 94.513-26.965zm-119.87 43.66c-1.058 1.99-7.086 83.113-10.403 98.937-19.397 9.728-71.78 21.074-73.92 6.977 3.618-16.654 37.1-71.993 84.324-105.915zm278.095 26.248c1.196 3.294 2.213 6.627 3.026 9.996 4.2 17.4 2.736 35.916-6.84 52.933-10.34 18.374-23.007 32.528-47.808 46.057-24.8 13.53-61.8 27.285-123.832 48.05-36.878 12.346-75.83 61.892-113.438 103.012-18.804 20.56-37.417 39.008-57.525 49.285-5.895 3.014-12.05 5.204-18.322 6.418 3.03 1.73 6.143 3.338 9.165 4.728 8.116 3.734 16.547 5.668 17.197 5.686 14.037-.65 29.08-8.326 44.816-21.024 15.82-12.764 32.063-30.284 48.493-48.676 32.86-36.784 65.744-77.523 104.444-90.478 61.817-20.694 98.67-34.278 121.465-46.543 22.794-12.264 31.4-22.235 40.044-39.028 9.733-18.912 10.244-32.256 4.506-46.28-4.33-10.583-12.968-21.73-25.39-34.135zm-314.546 95.466c33.96-.19 69.09 16.75 104.688 36.092-71.258 37.318-141.89 180.326-187.133 133.99-18.206-20.105-19.433-119.77 30.147-153.564 17.043-11.616 34.51-16.418 52.297-16.518zm-36.463 73.213c-5.436.103-10.92 1.77-14.74 4.787-12.34 9.753-21.72 34.145-11.206 45.844 10.057 11.19 35.46 5.816 44.728-6.012 8.262-10.544 5.69-31.088-4.32-40.02-3.632-3.24-9.023-4.7-14.46-4.6z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSteakIcon);
    
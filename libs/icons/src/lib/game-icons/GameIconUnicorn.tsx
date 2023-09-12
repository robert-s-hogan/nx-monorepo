
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconUnicornIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'unicorn'];
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
        <path fill="currentColor" d="M494 20L304.887 143.357c16.494 14.608 32.743 22.57 44.963 36.97zM298.346 93.594c-12.58.436-26.59 4.984-38.047 11.77-7.64 4.523-14.115 9.97-18.304 15.142-4.19 5.173-5.79 9.832-5.648 12.668l.283 5.73-5.075 2.676C133.713 193.16 80.945 250.727 18 310.594V494h166.047c6.145-15.424 12.724-33.898 15.086-47.535 1.728-9.977-2.783-21.807-8.23-35.244-5.444-13.436-11.85-28.706-7.63-45.423 3.49-13.827 14.375-25.752 24.096-35.656 4.45-4.534 8.71-8.463 12.075-11.445-6.558-8.577-14.065-20.315-16.51-34.894l17.75-2.978c2.68 15.976 15.203 28.533 22.8 39.24l-.323.23c10.54 14.634 18.892 28.395 30.72 37.546 13.358 10.337 31.484 16.39 66.526 11.49l6.658-.932 2.782 6.124c6.96 15.322 14.372 23.89 21.015 28.423 6.643 4.535 12.63 5.46 18.692 4.79 12.125-1.34 24.29-10.974 27.76-14.264 4.13-3.92 9.657-9.476 13.32-16.124 3.347-6.076 5.073-12.687 3.48-20.744-42.68-37.562-69.592-108.75-90.256-152.6-9.245-19.62-35.786-34.492-52.967-47.95-2.427-1.4-2.675-2.582-3.24-5.154-4.215-19.167 3.188-40.257 10.974-57.298-.096.002-.186-.01-.28-.006zM59.352 136.55c17.863 4.925 37.775 9.665 57.406 14.815 14.803 3.883 29.26 7.935 42.406 12.766 17.914-12.178 37.407-24.123 59.072-35.77-51.62-13.3-109.928-3.148-158.884 8.19zm28.738 26.126c-23.002 4.133-45.974 10.254-67.147 16.662 18.133 3.813 38.298 7.314 58.207 11.242 11.774 2.323 23.337 4.766 34.256 7.643a686.475 686.475 0 0 1 27.403-21.15c-9.044-2.932-18.71-5.698-28.62-8.298-7.952-2.086-16.043-4.098-24.1-6.1zM47.44 202.94c-9.875 2.096-19.728 4.582-29.44 7.29v18.04a2251.165 2251.165 0 0 1 20.172 3.146c10.505 1.7 20.847 3.498 30.734 5.625 8.836-8.185 17.887-16.322 27.268-24.397-6.64-1.56-13.52-3.024-20.508-4.403-9.32-1.838-18.81-3.566-28.227-5.3zM304 224c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM18 246.512v26.58c4.16.195 8.28.425 12.342.71 7.44-7.2 14.878-14.384 22.387-21.538a604.747 604.747 0 0 0-17.433-3.078A1501.67 1501.67 0 0 0 18 246.512z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconUnicornIcon);
    
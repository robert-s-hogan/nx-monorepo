
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDeshretRedCrownIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'deshret-red-crown'];
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
        <path fill="currentColor" d="M304.584 25.057c4.56.092 9.456.807 14.64 2.265 23.538 6.625 42.59 36.765 37.022 77.908-7.188 53.11-34.83 91.61-66.517 125.633-5.844-2.294-11.512-5.036-17.066-8.142 32.206-33.85 58.95-69.708 65.744-119.904 4.656-34.395-13.062-55.07-24.06-58.166-15.98-4.496-22.284-.58-26.557 4.614-4.272 5.193-5.342 14.235-4.884 16.693.84 4.505 5.31 9.92 10.664 12.75 5.355 2.83 9.875 2.558 11.645 1.147.7-.56 1.258-1.106 1.73-1.64a16.304 13.092 31.855 0 1-7.463-2.76 16.304 13.092 31.855 0 1-6.937-19.725 16.304 13.092 31.855 0 1 20.758-2.517 16.304 13.092 31.855 0 1 .15.1c7.694 3.575 12.903 10.946 13.442 18.843.55 8.077-3.418 16.16-10.46 21.772-9.448 7.532-21.805 5.7-31.277.693-9.47-5.005-17.773-13.705-19.947-25.364-1.717-9.216.222-21.15 8.68-31.43 6.344-7.71 17.01-13.045 30.694-12.77zM96.22 28.795c119.857 248.87 236.552 245.093 321.796 218.965 2.965 40.132 7.887 77.118 18.132 113.94l-77.625 48.83c-12.293-27.498-34.082-38.8-48.013-24.82-13.932 13.977 6.638 45.033 20.992 63.08l-38.252 37.02C196.355 352.16 124.757 202.942 76.555 39.33L96.22 28.795z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDeshretRedCrownIcon);
    
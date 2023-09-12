
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFunnelIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'funnel'];
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
        <path fill="currentColor" d="M256 23c-62.377 0-118.824 5.375-160.277 14.258-20.727 4.441-37.674 9.69-50.188 16.03-26.54 16.094-31.144 53.2-21.918 77.99C69.915 217.435 138.57 281.384 215 340.321V489c25.848-.604 80.089-14.04 82-41V340.322c67.639-60.819 155.483-122.156 191.383-209.045 5.479-17.026 3.503-55.854-6.424-67.166-4.04-4.23-9.237-7.654-15.494-10.824-12.514-6.34-29.461-11.588-50.188-16.03C374.824 28.376 318.377 23 256 23zm0 18c61.335 0 116.887 5.37 156.506 13.86C422.354 57.71 470.826 69.626 471 80c.175 10.464-46.091 22.442-58.494 25.14C372.886 113.63 317.335 119 256 119c-61.335 0-116.887-5.37-156.506-13.86C89.646 102.29 40.887 89.064 41 80c.12-9.68 46.092-22.442 58.494-25.14C139.114 46.37 194.665 41 256 41z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFunnelIcon);
    
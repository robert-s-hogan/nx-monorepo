
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFireRayIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'fire-ray'];
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
        <path fill="currentColor" d="M12.195 20.94v39.128c76.452 73.026 151.387 152.574 187.47 215.5 12.6 21.978 38.114 72.972 49.056 118.557-31.424-3.388-64.762-14.633-96.36-33.873 11.605 19.025 25.57 37.838 42.632 54.898 83.895 83.897 200.548 103.142 260.473 43.217 59.927-59.927 40.678-176.574-43.22-260.47-17.062-17.063-35.872-31.028-54.895-42.633 21.316 35.01 33.27 71.947 35.04 106.29-47.3-13.436-103.76-38.565-127.316-51.976C201.59 173.434 121.32 98.073 47.818 20.938H12.195zM374.89 285.866c47.63 0 86.557 36.296 90.727 82.817-12.225-22.7-36.207-38.133-63.797-38.133-39.995 0-72.42 32.423-72.42 72.42 0 5.462.61 10.78 1.758 15.897 2.835-21.18 21.098-37.674 43.018-37.674 23.866 0 43.414 19.55 43.414 43.414 0 23.866-19.548 43.413-43.414 43.413-1.59 0-3.157-.093-4.703-.262.114.057.225.12.34.176-48.052-2.623-86.028-42.24-86.028-90.96 0-50.428 40.677-91.107 91.104-91.107z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFireRayIcon);
    
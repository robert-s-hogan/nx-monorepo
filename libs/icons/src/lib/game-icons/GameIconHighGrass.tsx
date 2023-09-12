
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHighGrassIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'high-grass'];
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
        <path fill="currentColor" d="M461.563 38.938C313.435 165.053 232.49 371.144 210.313 492.5h77.218c31.597-122.495 51.135-263.494 174.033-453.563zM78.375 91.374c52.397 62.796 102.31 132.45 142.094 199.28 7.298 12.263 14.236 24.417 20.81 36.408 7.833-19.184 16.525-38.697 26.095-58.282-51.817-71.23-113.464-135.005-189-177.405zm391.188 133.72c-51.588 46.498-78.856 114.453-90.594 190.655 13.775 25.835 26.704 51.295 38.936 75.875h39.375c-25.25-71.46-11.537-162.36 12.283-266.53zM67 240.437c72.962 73.26 120.794 188.6 80.094 250.78h45c4.494-25.12 11.34-53.633 20.687-84.25C194.338 322.68 131.42 242.927 67 240.44zm-32.875 87.937C87.145 409.31 95.83 453.34 75.063 490.97h67.5c-13.1-72.02-31.444-116.305-108.438-162.595zm300.938 45.594c-10.65 41.36-19.188 80.437-28.813 118.25h91.72c-19.144-38.286-39.92-78.392-62.908-118.25z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHighGrassIcon);
    
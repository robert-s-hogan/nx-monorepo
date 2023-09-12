
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTriquetraIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'triquetra'];
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
        <path fill="currentColor" d="M256 74.06c32.76 39.37 52.457 90.004 52.457 145.29 0 21.33-2.937 41.966-8.42 61.534-28.84-5.284-58.69-5.445-88.098-.09-5.467-19.54-8.397-40.147-8.397-61.445 0-55.286 19.698-105.92 52.457-145.29zm-.582 220.687c13.13-.026 26.197 1.1 39.057 3.313-9.017 24.453-22.117 46.918-38.475 66.578-16.365-19.668-29.47-42.144-38.486-66.61 12.6-2.17 25.28-3.256 37.904-3.28zM199.8 301.82c10.063 28.133 25.12 53.896 44.108 76.224-41.252 42.28-98.866 68.52-162.68 68.52-13.104 0-25.943-1.12-38.437-3.243 17.722-48.045 51.722-90.41 99.595-118.05 18.446-10.65 37.758-18.414 57.416-23.45zm112.39.025c57.208 14.6 108.705 51.362 140.595 106.593 6.548 11.342 11.993 23.013 16.4 34.887-12.488 2.122-25.318 3.24-38.414 3.24-63.812 0-121.426-26.242-162.678-68.52 18.98-22.322 34.037-48.076 44.1-76.2zm180.22 154.888l-5.44-17.162c-4.898-13.677-11.078-27.108-18.597-40.132-34.176-59.19-89.39-98.733-150.77-114.67 5.76-20.833 8.854-42.767 8.854-65.42 0-60.5-21.98-115.908-58.365-158.695L256 47.435l-12.092 13.218c-36.386 42.787-58.365 98.195-58.365 158.696 0 22.616 3.085 44.517 8.83 65.32-20.89 5.424-41.4 13.704-60.988 25.013-52.404 30.254-89.403 77-108.264 129.91l-5.425 17.17 17.498 3.843c14.29 2.596 29.004 3.96 44.036 3.96 68.387 0 130.27-28.075 174.77-73.303 44.5 45.228 106.383 73.302 174.77 73.302 15.04 0 29.76-1.364 44.056-3.963"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTriquetraIcon);
    
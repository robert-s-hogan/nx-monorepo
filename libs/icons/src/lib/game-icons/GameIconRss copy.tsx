
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconRss copyIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'rss copy'];
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
        <path fill="currentColor" d="M204.344 15.656c-1.834 41.508-21.638 86.793-58.313 123.47-36.46 36.464-81.78 56.622-123.093 58.655 50.013 17.25 107.817 5.874 147.72-34.03 39.9-39.904 51.21-97.952 33.687-148.094zM21.28 20.376v115.968c9.573 3.68 20.1 5.844 30.845 5.844 47.224 0 85.094-37.857 85.094-85.063 0-12.952-3.6-25.453-9.126-36.75H21.28zm261.064 4.218c-2.53 57.284-29.825 119.79-80.438 170.406-50.32 50.323-112.865 78.132-169.875 80.938 69.022 23.803 148.777 8.1 203.845-46.97 55.27-55.273 70.648-135.174 46.47-204.374zM370 27.25c-3.388 76.7-39.92 160.386-107.688 228.156-67.376 67.38-151.135 104.617-227.468 108.375 92.413 31.87 199.205 10.833 272.937-62.905 74.006-74.01 94.596-180.97 62.22-273.625zm101.75 22.03c-4.192 94.902-49.43 198.427-133.28 282.283-83.365 83.37-186.99 129.475-281.44 134.125 114.347 39.432 246.492 13.42 337.72-77.813 91.567-91.574 117.06-223.95 77-338.594z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconRss copyIcon);
    

  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconThunderballIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'thunderball'];
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
        <path fill="currentColor" d="M22.03 16.844l147 158.125 37.75-14.626 6.75 17.437-110.25 42.72 209.564 230.53.187.25c18.074 22.833 46.023 37.5 77.314 37.5 54.318 0 98.562-44.243 98.562-98.56 0-43.636-28.55-80.77-67.937-93.69l-132.095-73.56-56.75 23.968-7.28-17.22 43.31-18.28-.186-.094 102.624-43.28L22.03 16.843zm368.314 293.5c44.218 0 79.875 35.656 79.875 79.875 0 7.866-1.146 15.45-3.25 22.624L446.155 409l4.688-39.656-22.78 54.22 32.467 4.873c-5.74 10.555-13.776 19.644-23.467 26.625l-51-24.75 37.312-44.78-79.594-40.626 53.064 47.25-43.97 36.47 42.72 41.312c-1.736.11-3.486.156-5.25.156-44.22 0-79.875-35.657-79.875-79.875 0-1.48.045-2.95.124-4.408l30.562 11.47-6.5 25.562 27.75-34.938-49.437-17.72c6.807-26.514 26.865-47.622 52.717-55.967l24.5 35.217 51.438-5.218-41.75-8.72-17.688-24.75c2.68-.27 5.404-.406 8.157-.406z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconThunderballIcon);
    
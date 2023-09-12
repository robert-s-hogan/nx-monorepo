
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconIceCreamConeIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'ice-cream-cone'];
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
        <path fill="currentColor" d="M256 25c-27.517 0-50.167 19.982-54.314 46.293C203.77 71.113 205.87 71 208 71c18.356 0 35.153 6.846 48 18.1C268.85 77.848 285.645 71 304 71c2.13 0 4.23.113 6.314.293C306.167 44.983 283.517 25 256 25zm-48 64c-30.482 0-55 24.518-55 55 0 15.277 6.16 29.055 16.14 39h73.225C235.183 171.704 231 158.33 231 144c0-15.433 4.844-29.762 13.07-41.574C234.428 94.06 221.833 89 208 89zm96 0c-30.482 0-55 24.518-55 55 0 15.277 6.16 29.055 16.14 39h77.72c9.98-9.945 16.14-23.723 16.14-39 0-30.482-24.518-55-55-55zm-92.912 112L256 217.332 300.912 201h-89.824zm-37.315 5.586l10.995 36.648 44.894-16.324-55.89-20.324zm164.454 0l-55.89 20.322 44.895 16.326 10.995-36.648zM256 236.486l-55.96 20.35 55.96 24.87 55.96-24.87-55.96-20.35zm-62.055 37.338l9.387 31.29 30.508-13.56-39.895-17.73zm124.11 0l-39.895 17.73 30.508 13.56 9.387-31.29zM256 301.404l-42.916 19.075L256 341.936l42.916-21.458L256 301.403zm-41.863 39.727l5.67 18.903L235.873 352l-21.736-10.87zm83.726 0L276.127 352l16.066 8.033 5.67-18.902zM256 362.064l-30.943 15.472 4.564 15.213 26.38 13.19 26.38-13.19 4.563-15.213L256 362.062zm0 64l-14.248 7.123L256 480.678l14.248-47.492L256 426.063z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconIceCreamConeIcon);
    
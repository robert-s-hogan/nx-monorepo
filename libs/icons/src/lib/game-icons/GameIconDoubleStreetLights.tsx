
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDoubleStreetLightsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'double-street-lights'];
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
        <path fill="currentColor" d="M96 25c-13 0-27.05 6.78-37.64 17.36-8.17 8.18-14.03 18.41-16.3 28.64H145.4l-23-46H96zm293.6 0l-23 46h103.3c-2.2-10.23-8.1-20.46-16.3-28.64C443.1 31.78 429 25 416 25h-26.4zm-27.5 14.65c-25.3 1.55-49.8 6.15-70.1 16.3-15.3 7.62-28 18.95-36 33.99-8-15.04-20.7-26.37-36-33.99-20.3-10.15-44.8-14.74-70.1-16.29l9.5 18.89c19.8 2.06 38.2 6.29 52.6 13.5C233.8 82.98 247 99 247 128v231h18V128c0-29 13.2-45.02 35-55.95 14.5-7.22 32.8-11.45 52.6-13.51l9.5-18.89zM47.34 89L19 131.2l47.8-21.9-9 66.7 32.9-58.8 13.2 85.8 14.8-89.3 46.7 58.7-22.1-69.6 51.2 13.6L163.4 89H47.34zm301.26 0l-31.1 27.4 51.2-13.6-22.1 69.6 46.7-58.7 14.8 89.3 13.2-85.8 32.9 58.8-9-66.7 47.8 21.9L464.7 89H348.6zM236.7 377l-3.4 110h45.4l-3.4-110h-38.6z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDoubleStreetLightsIcon);
    
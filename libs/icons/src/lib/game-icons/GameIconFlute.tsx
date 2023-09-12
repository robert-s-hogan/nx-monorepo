
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFluteIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'flute'];
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
        <path fill="currentColor" d="M449.4 26.29c-5.4 2.56-14.6 7-27.2 14.14-17.6 9.98-37.7 23.64-45.9 34.27-1.8 2.33-5 10.39-6.8 17.25-1.2 4.49-1.4 6.02-1.8 8.25l44 44c2.2-.4 3.8-.6 8.3-1.8 6.9-1.8 15-5 17.3-6.8 10.6-8.2 24.3-28.2 34.2-45.79 7.2-12.62 11.6-21.81 14.2-27.24zM435 54.32l22.7 22.63-12.8 12.74-22.7-22.63zm-77.1 61.48L42.49 431.3c7.86 3 15.66 8.3 22.77 15.4 7.09 7.1 12.37 14.9 15.42 22.7L396.1 154zm-8.3 30.7a16 16 0 0 1 .1 0 16 16 0 0 1 11.1 4.7 16 16 0 0 1 0 22.6 16 16 0 0 1-22.7 0 16 16 0 0 1 0-22.6 16 16 0 0 1 11.5-4.7zm-45.1 45.3a16 16 0 0 1 11 4.6 16 16 0 0 1 0 22.7 16 16 0 0 1-22.6 0 16 16 0 0 1 0-22.7 16 16 0 0 1 11.6-4.6zM259.2 237a16 16 0 0 1 11.1 4.7 16 16 0 0 1 0 22.6 16 16 0 0 1-22.6 0 16 16 0 0 1 0-22.6 16 16 0 0 1 11.5-4.7zm-45.3 45.3a16 16 0 0 1 .1 0 16 16 0 0 1 11 4.7 16 16 0 0 1 0 22.6 16 16 0 0 1-22.6 0 16 16 0 0 1 0-22.6 16 16 0 0 1 11.5-4.7zm-45.2 45.3a16 16 0 0 1 11.1 4.6 16 16 0 0 1 0 22.7 16 16 0 0 1-22.7 0 16 16 0 0 1 0-22.7 16 16 0 0 1 11.6-4.6zM29.04 446.5c-1.44 0-2.13.4-2.25.5-.21.2-1.2 2.3.43 7.5 1.7 5.2 5.87 12.1 12.02 18.2 6.15 6.2 13.01 10.4 18.24 12.1 5.16 1.6 7.29.6 7.5.4.21-.2 1.2-2.4-.43-7.5-1.69-5.2-5.87-12.1-12.02-18.3-6.15-6.1-13.01-10.3-18.24-12-1.93-.6-3.44-.8-4.58-.9z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFluteIcon);
    
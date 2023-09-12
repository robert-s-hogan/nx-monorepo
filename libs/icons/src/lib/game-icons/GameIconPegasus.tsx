
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPegasusIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'pegasus'];
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
        <path fill="currentColor" d="M329.2 317.16c-3 82.09-78.09 146-78.09 146L192 439.73c-27.57-11-37.86-28.56-50.31-55.49l-.06-.12 94.49 27.2-57.73-27.64c-41.53-19.88-58.87-47.12-76.76-89.55l134.47 52-126.2-76.23c-28.67-17.32-37.15-36.68-51.25-67.06l161.16 68.74-79-51.51C55.6 166.5 47.95 135.26 18.88 72.57l181 113.86c51.5 32.38 131.55 69.93 129.32 130.73zM493.12 216.5c0 6.87-17.51 20.85-20.35 20.62-3.7-.31-46.27-27.85-61.93-35.68-15-7.49-59.39 1.27-64.19-42.81-11 28 10.77 90.21 27.84 120.18 35.42 62.17-25.71 146.59-101.8 186A304.54 304.54 0 0 0 302 430.4a252.08 252.08 0 0 0 28.5-49.52c9-21.2 14-42.44 14.73-63.13a85.52 85.52 0 0 0-10.78-44.35c-6.49-12-15.74-23.4-28.28-34.93-21.84-20.09-50-36.91-74.92-51.74l-1.16-.69c-5.83-11-8.63-21.26-4.81-29.76 26.71-59.41 100.93-93.52 166.18-86.86 21.2-25.48 41.89-22.08 41.89-22.08l-11.9 25.33s20-11.19 23.11-7.29l-16.48 30.7L442 114.61s51.12 95.57 51.12 101.89zm-73.8-99.92a9.47 9.47 0 1 0-9.47 9.47 9.47 9.47 0 0 0 9.48-9.48z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPegasusIcon);
    
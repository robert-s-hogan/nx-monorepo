
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMarshmallowsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'marshmallows'];
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
        <path fill="currentColor" d="M455.9 21.84h-.9c-2.8.15-5.9 1.19-9.6 3.3l-52.7 51.95c-1.2 1.76-1.5 3.26-1 5.77.6 2.62 2.4 5.99 5 8.84 2.6 2.85 5.9 5.12 8.8 6.14 2.3.85 3.8.76 4.9.4l62.1-61.43c-.5.51 0 .14-.6-1.95-.6-2.26-2.4-5.45-5-7.91-3-2.87-6.5-5.09-11-5.13zM352.2 48.36c-1.3 0-2.5 0-3.5.14-4.3.48-6.7 1.83-8.2 3.69-1.5 1.86-2.4 4.54-2.2 9.03.2 4.49 1.7 10.55 4.7 17.15 6.1 13.48 17.9 29.53 33.7 43.73 15.8 14.3 32.7 24.1 46.3 28.2 6.7 2.1 12.6 2.8 16.9 2.3 4.2-.5 6.6-1.8 8.1-3.7 1.5-1.9 2.4-4.5 2.2-9-.2-4.5-1.7-10.6-4.7-17.2-2.9-6.6-7.3-13.8-12.8-21.1-4.9 5.2-7.8 10-13.3 12.5-6.6 3.4-13.9 2.9-20.1.7-6.1-2.2-11.5-6.1-15.9-10.9-4.4-4.83-7.9-10.63-9.3-17.28-1.4-6.65-.3-14.5 4.5-20.71l.3-.48 6.1-5.99c-6.9-3.92-13.5-6.85-19.5-8.68-5-1.58-9.6-2.32-13.3-2.4zM320.8 63.4c-9.9 7.85-32 26.6-32.6 40.2 7.8 58.8 58.9 100.5 96.1 103 20.1-3.3 34.8-19.1 47.4-35.7-4.4-.5-8.9-1.5-13.5-2.9-16.8-5.2-35.4-16.2-52.9-31.9-17.5-15.8-30.7-33.3-38.1-49.96-3.6-7.7-5.8-15.37-6.4-22.74zm-30 109.3l-42.9 46.1c-1 1.2-1.3 2.1-.4 5.2.9 3.2 3.5 7.4 6.9 11 3.3 3.6 7.5 6.4 10.7 7.6 2.8 1.1 3.8.9 4.2.6l44.4-47.1c-8.8-6.5-16.9-14.1-22.9-23.4zm-93 16.5c-8.3.2-13.4 2.9-15.4 6.3-2.6 4.6-1.7 14.3 6.1 27.3 7.8 13.1 21.8 28.1 39.5 40.6s35.8 20.2 49.8 22.5c14 2.3 22.2-.9 24.8-5.5 2.7-4.6 1.7-14.2-6.1-27.3-1.4-2.3-3-4.7-4.7-7.1-4 3.7-7 8.6-11.5 11.6-6.7 5-15.1 4.4-21.6 1.8-6.6-2.5-12.4-6.8-17.4-12-5-5.3-9-11.4-11.1-18.3-2-7-1.5-15.7 4.1-22.1l.2-.2 5.4-5.7c-11.8-6.1-22.9-9.4-32.7-11.1a55 55 0 0 0-9.4-.8zM165 211.3c-9.8 13.3-18.8 28.2-24 44.2 7.5 31.2 22.2 51.6 41.1 66.1 18.8 14.5 42.1 22.9 66.7 28.4 18.8-6.8 31-25.6 41-44.5-4.5.1-9.2-.2-14-1-17.2-2.9-37.1-11.6-56.8-25.4-19.6-13.9-35.1-30.2-44.8-46.4-4.2-7-7.5-14.3-9.2-21.4zM364.1 247c-35.3 53.9 29.4 142.8-20.6 170.9-22.5 12.6-61.7-5.7-70.4-32.1 1.6 38.7 17 101.3 82.5 105.5h116.3c26.9-44.4 23.3-87.7 11.3-130.8-9.5 26.8-23.3 27.8-35.8 21.6-16.9-8.3-12.7-35.5-6.2-56.1-16 12-24 25.4-26.1 39.8-2.6-39-57.1-59.9-51-118.8zM64.98 284.7c-6.04 0-9.91 5.1-10.35 7 2.96 47.5-1.87 94.4-5.63 135.3l-22.56 31.2c1.17 6 5.16 13.6 11.35 19.6 6.14 5.9 13.84 9.8 21.38 10.6 38.56-46.6 81.23-94.7 125.73-143.2-4.8-2.8-9.4-5.9-13.8-9.3-6.5-5-12.7-10.7-18.3-17.2-22.4 24.7-43.6 49.1-63.14 73.1l-17.42 21.4c1.23-41 6.45-85.1 5.66-121.2-4.9-5.4-9.3-7.3-12.92-7.3z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMarshmallowsIcon);
    
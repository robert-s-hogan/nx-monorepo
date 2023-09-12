
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconRopeCoilIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'rope-coil'];
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
        <path fill="currentColor" d="M248.9 57.48c0 3.7.2 7.9 1.1 12.6 20.6-.3 43 .3 61.4 2.1-.4-4.3-.4-8.3.2-12.1-22.7-2.4-41.8-3.3-62.7-2.6zm-18 1c-30.5 2.3-57.8 7.8-78.9 15.2 1.5 2.6 3.5 5.7 5.6 9.2 18.1-5.9 44.5-10.2 74.3-12-.7-4.6-1-8.8-1-12.4zm98.5 4.2c-.5 3.2-.4 7.1.6 11.9 17.3 2.8 31 6.6 39.8 11.1 6.2-2.2 12.7-3.5 19-4.1-18.7-10.1-40.6-15.6-59.4-18.9zm-194.2 18c-7.4 3.7-13.5 7.6-17.9 11.4-6.8 6-9.2 11.22-9.2 15.82 2.9 14.4 16.6 21.4 28 26.7 3.6-7.3 7.9-14.2 13.3-20.3-10.4-4.1-15.9-8.9-16-13.8 0-3.42 2.6-6.82 7.6-10.12-2.1-3.4-4.1-6.6-5.8-9.7zm243.9 20.92c-3.4 5.5-13.3 10.6-28.4 14.9 2.5 8.6 3.3 17 3.6 25.4 15.8-5 33.1-11.3 45.4-21.9 5.4-5.5 10.7-12.1 8.6-19.4-9.6-2.12-19.9-1.52-29.2 1zm-203.6 13.8c-13.2 8.3-21.9 21.6-27.6 37.8.9 14.7 1.6 34.9 13 45.5 4.4-31.8 21.3-64.2 39.6-81.5-8.2-7.8-16.5-7.1-25-1.8zm157.5 5.3c-17.9 3.5-39.2 5.8-61.7 6.7-6.6 12.4-6.9 17.5-8.3 27.4 26.7-.5 51.7-3.5 73.2-8.3-.2-9-.3-17.6-3.2-25.8zm-116.2 6c-9.2 7.6-16.3 15.7-21.7 24 15.4 2.3 32.1 3.8 49.7 4.2 1.5-9.6 2.2-16.8 6.4-27.1-11.7 0-23.3-.4-34.4-1.1zm-120.36.1c-10.37 22.3 13.36 36.6 28.26 44 1.2-6.5 2.8-13.1 4.8-19.4-13-6.4-25.3-13.4-33.06-24.6zm318.16 3.9c-9.5 8.9-22 15.9-32 20.2 2.9 10 3.6 20.3 1 29.7 11.6-4.6 21-9.8 27.4-15.2 7.8-6.4 11-12.5 11.2-18.2.2-5.1-2.1-10.5-7.6-16.5zm-48.9 26.5c-19.5 6.4-42.7 11.1-68.1 13.6-8.2 7.1-8.3 18.1-7.2 27.2 24.3-1.2 46.8-4.3 66-9 10.2-11.2 13-18.5 9.3-31.8zm-279.88 7.4c-16.43 29.7 13.58 45.8 34.28 54.7.2-9.6.7-19.7 1.8-29.8-13.9-7.3-26.6-14.2-36.08-24.9zm348.98.6c-6.3 9.9-14.8 16.8-24 22.2 2.1 7.4 2.3 14.4.5 21.1 11.6-6.9 26.5-19.5 26.6-32.6 0-3.5-1-7-3.1-10.7zm-248.4 2.4c-2.8 7.2-4.7 14.4-6 21.8 5.1 1.1 10.4 2.1 15.9 3.1.4-8.7 2.7-16 7.3-22.4-5.9-.7-11.6-1.5-17.2-2.5zm39.8 4.5c-7.2 6.4-13 14.6-11.9 23 20.9 2.4 38.8 3.5 58 3.4-.6-9.6-.5-17.9 2.6-26-16.3.7-33.6.5-48.7-.4zM63.79 194.2c-5.2 10.1-1.05 22.2 4.29 29.4 1.34-4 2.89-8.8 4.97-14.3-4.05-4.7-7.22-9.7-9.26-15.1zm330.81 1.4c-21.7 8.8-47.2 14.4-67.5 17.2-6.3 6.7-3.7 16-2.4 23.4 24.5-3.9 46.3-9.7 64.1-16.8 2.8-7.6 7.3-16.4 5.8-23.8zm-255.5 3c-1.7 20.8-1.1 41.8-.9 58.8 4.9 20.2 23.5 7.1 23.5 4.4-.3-12.2-1.8-27.1-1.7-43.3-10.2-5.3-16.7-11.2-20.9-19.9zm303.2 8.4c-.9 1-1.8 1.9-2.8 2.8 1.4 10.5 1.7 22.4 1.4 32 4.7-5.6 7-11.1 7.3-16.7.3-5.8-1.5-11.8-5.9-18.1zm-264 .4c-.5 9.6-.3 19.1.2 28.3 10.6 1.8 21.9 3.3 33.6 4.3-2.1-9.6-2.2-18.6 2-26.8-12.5-1.4-24.4-3.4-35.8-5.8zm127.8 7.6c-25.5 1.7-47.4 1.9-70.7.3-9.1 6.9-6.9 18.2-3.9 26 25.4 1.1 51.8 0 75.3-2.7-1.3-8.4-2.6-15.9-.7-23.6zm-218.49 7.1c-1.93 5.7-3.42 10.6-5.27 15.4 13.3 9.2 24.56 15.3 37.86 20.8-.1-6-.2-12.6-.3-19.6-12.4-4.8-23.26-10.3-32.29-16.6zm335.09.6c-16.5 9.8-33.3 16.3-50.3 21.3-1.4 11.2-4.9 22-1.1 31.8 16.4-4 32.7-9.4 46.9-16.9 4.9-11.3 5.1-26.1 4.5-36.2zm38.3 23.7c1.3 4.8 1.8 9.9 1.7 15 6.7-3.2 13.7-3.8 20.1-1.2 0-6.3-.8-12.6-2.4-18.8-5.2-14.1-21.7-5.2-19.4 5zM53.99 234.8c-3.31 5.4-4.88 10.7-4.88 16 2.71 17.2 12 26.6 24.31 35.3-.92-10.1 1.9-20.1 7.91-27.4-10.73-7.3-20.11-14.4-27.34-23.9zm298.81 14.3c-18 4.1-37.6 7.2-58.5 8.9-7.4 7.5-7.7 18.4-4.3 27.6 22.7-.5 44-2.7 63.2-6.1-1.8-10-1.6-21.5-.4-30.4zm-173.4 5c.5 7.1-.1 15.4-4 20.9 5.1 1.1 10.4 2.2 15.8 3.2-1.1-7.9-1.2-15.3 1.5-22.1-4.5-.6-9-1.3-13.3-2zm32.7 4c-5.8 6.5-3.4 16.3-1.8 23.1 21.7 2.7 40.8 4.2 60.9 4.5-1.8-9.2-1.6-18.1 1.2-26.4-20.1.8-42.1.3-60.3-1.2zm235.3 2.6c-11.1 9.2-24.8 16.7-36 21.3-2.2 7-.4 13.4 1.2 19.6 14.3-6.1 26-13 34.7-20.2-.5-7 1.4-14.4.1-20.7zm-349.96 7c-9.27 8.4-5.52 22.6-2.7 30.7 13.96 6.6 29.76 11.9 43.16 15.6-2.4-10.8-2.3-20.6 2.9-29.3-15.8-5.2-29.9-10.3-43.36-17zm375.86 8.8c-20.1 14.4-27.9 35-44.1 52.7 2.7 7 6.2 13.1 9.2 19.4 20.3-20.6 36.1-43.9 42-68-1.9-2.2-4.5-4.7-7.1-4.1zm-80.9 12.2c-20.7 6.3-44.7 10.8-70.9 13.2-3.9 7.1-.5 16.1 1.7 22.5 27.1-3.5 51.7-9.2 72.5-16.3-1.8-6.8-3.4-12.9-3.3-19.4zm-232.9 1.2c-9 9-3.9 22-.3 29.1 17.7 3.7 37 6.4 57.4 8-2.8-9.1-3-18.6.4-26.8-20.3-2.4-39.6-5.9-57.5-10.3zm77.9 12.3c-7.9 6.9-4.9 18.4-.6 26 22.7.8 47.2.1 68.1-1.8-2.4-7.7-4-15.8-2.9-23.2-23.6.8-43.5.6-64.6-1zM51.5 359c.46 7.7 3.53 15.5 6.97 21.5 19.87-17.9 41.63-25.4 65.13-20.2.9-6.9 4.6-13.9 8.8-18.6-28.2-7.4-60.89.3-80.9 17.3zm362.8-15.1c-10.8 9.8-22.9 19-35.6 27.2 3.4 5.9 7.6 11.7 10.4 17.2 12.5-8.1 24.4-17 35.4-26.7-2.2-4.4-8.1-19.4-10.2-17.7zm-262.2 4.6c-6.4 4.7-11.1 10.2-10.8 17.5 18.5 7.5 37.1 19.4 56.3 31.2 1.3-6 3.5-14.1 6.3-19.6-16.5-10.3-33.6-21.3-51.8-29.1zM36.81 376.4c-6.69 11.2-9.67 24.8-6.04 38.5 1.92 7.2 5.61 14.2 11.05 20.8 3.15-7.2 6.85-12.5 13.04-15.9-4.23-6.3-6.36-13.8-5.46-20.8-5.67-6.8-9.89-14.7-12.59-22.6zm326.49 4.1c-19.4 11-39.4 19.7-57.8 24.9-1.8 5.3-2.4 12.2-.5 20.9 22.2-5.6 45.9-15.5 68.7-28.6-3.3-6.4-7-11.5-10.4-17.2zm-144.2 6.4c-3.1 5.6-5.1 11.7-3.4 21.2 22.4 12.8 46.1 23 71.6 21.2-1.4-7.1-1.7-13.8-1-20-22 1.6-43.9-8.6-67.2-22.4zM61.46 453c4.6 3.2 10.89 1.9 13.98-2.7 3.09-4.7 1.78-10.9-2.91-14-11.83-7.4-18.76 11.4-11.07 16.7z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconRopeCoilIcon);
    
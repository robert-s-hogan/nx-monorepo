
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPorcupinefishIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'porcupinefish'];
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
        <path fill="currentColor" d="M354.2 15.5l-17.3 28c6.8 2.6 13.5 5.6 20.1 8.9zm-243.1 2.8s15.5 36.8 29.4 69.6C152.4 77.3 165.4 68 178.9 60zm136.5 1.9l-14 83.3-17.7-3 7-41.1c-27.8 10-55.2 27-77.7 48.7l41.3 10-4.3 17.6-64.5-15.8 30.6 48.9-15.2 9.7-19.7-31.5c-18.48 29.6-27.75 63.4-22.1 97.7l4.46 27.2-19.73-19.4c-20.16-19.9-36.67-27.8-54.76-29.6 19.47 48.2 23.93 111 17.78 161.6 20.01-6.7 41.08-18 50.41-41.8l5.38-13.8 9.76 11.1s6.5 7.5 17.2 18.4l41.5-78.1 15.8 8.5-34.3 64.9 68.3-31 7.4 16.4-81 36.7c7.1 6.8 15 14 23.5 21.2 10.2 8.7 21.3 17.1 32.5 24.7l-.5-29 18.1-.3 1.2 77.3 40.8-70.2 15.6 9-22.9 39.4c6.9 1.9 13.5 2.9 19.4 2.6 38-1.8 86.8-17.7 129.3-41.6l-20.3-14.2 10.3-14.9 66.9 46.8-29.7-72.6 16.7-6.8 9.7 23.6c8.4-7.7 15.9-15.7 22.2-24-2.1-1.5-5.4-3.5-9.5-5.6-4.7-2.7-10-5.3-14.6-9-2.2-1.8-4.4-3.8-6.1-7.1-1.6-3.2-2.1-8.1-.6-12 2.6-6.2 7.1-9.9 12-13.5 4.8-3.8 10.2-7.2 15.4-10.5 5.1-3.3 9.9-6.6 13-9.3 3.1-2.8 3.7-4.9 3.7-4.3 3.6-49.8-22.9-106.8-63.7-151-7.2-7.8-14.9-15.2-22.9-22.1l-13 72.7-17.7-3.2 10-55.8-53.9 48.2-12-13.4 69.3-62.2c-32.3-23.4-68.4-38.3-102.5-39.2l13.5 32.6-16.7 6.8zM454 53.9s-21.9 17.3-43.8 34.5c7.4 6.3 14.4 13 21.1 20zM27.03 125.3l49.72 60.9c3.12-11.9 7.59-23.3 13.19-34.3zm463.67 5s-16.2 6.1-31.3 11.9c3.3 4.6 6.4 9.3 9.4 14zm-72.8 64c22.6.1 40.9 18.6 40.9 41.1s-18.4 40.9-40.9 40.9-41-18.5-41-41 18.4-40.9 41-41zm-111.2 6l67 21.1-55.4 37.3-10.1-14.8 24.5-16.6-31.4-9.7zm-63.7 3.1l.2 18-80.2.4 67.3 47.4-10.5 14.7-113.2-79.8zm174.9 9c-12.8-.1-23 10.1-23 23 0 12.7 10.2 22.9 23 23 1.5 0 2.9-.2 4.3-.4a16 16 0 0 1-13.1-15.8 16 16 0 0 1 16-16 16 16 0 0 1 15.6 12.5c.1-1.1.2-2.2.2-3.3 0-12.9-10.2-23.1-23-23zm-127.5 97.2l29.8 66.6 24.9-54.2 16.2 7.5-41.3 90.4L274 317zm-160.6 82l-20.1 90.1 62.1-54.5c-7.1-5.3-13.9-10.9-20.4-16.5-8.1-6.8-15.2-13.2-21.6-19.1zm279.3 31.8c-9.9 5.7-20.1 11-30.5 15.7l45.7 54.8zm-99.6 39.3c-9.2 2-18.2 3.6-26.9 4.6l23.3 29.2z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPorcupinefishIcon);
    
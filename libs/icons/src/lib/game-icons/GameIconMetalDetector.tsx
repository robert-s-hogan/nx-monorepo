
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMetalDetectorIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'metal-detector'];
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
        <path fill="currentColor" d="M77.16 22.46c-.91 0-2.2.1-2.44.1l-.33.1h-.34c-8.94.49-17.59 2.17-24.97 5.66-3.03 1.43-4.94 3.08-5.79 4.59v.42l.12.19.1.19c.61 1.15 2.35 3.12 4.42 6.28l.31.46c-.08-.13-.16-.24-.24-.36 18.91 25.84 37.69 51.69 56.6 77.51h.1s0 .1.1.1l32.9-12c-3.9-7.77-7.9-15.52-11.9-23.26-3.4 1.5-7.2 2.38-11.1 2.38-14.79 0-27.27-11.81-27.27-26.58 0-10 5.78-18.54 14.07-23.08-1.3-2.58-2.69-5.16-3.99-7.75-.7-1.13-2.8-2.51-5.9-3.34-3.38-.95-7.06-1.36-10.93-1.46h-.54l-3.03-.1zm37.54 27.2c-5.4 0-9.3 3.93-9.3 8.58s3.9 8.58 9.3 8.58 9.3-3.93 9.3-8.58-3.9-8.58-9.3-8.58zM146.1 122l-30.2 10.9c11 15.2 22.1 30.3 33.2 45.5l128.7-28.5-13.6-17.6c-31.7 6.8-63.3 13.5-94.9 20.3l-6.8 1.5-3.1-6.2c-4.4-8.7-8.9-17.3-13.3-25.9zm67.8 60.5c-6.1 1.4-12.1 2.7-18.1 4l98.4 191.7c5.8 11.2 11.6 10.9 14.9 9.2 3.2-1.6 6.9-6.2 1.1-17.4zm115.6 187.9c3.7 14.2-1.5 27.6-12.2 33-12.8 6.6-30.3.3-39.1-17l-7.8-15.1c-12.1 1.7-23 4.3-31.6 7.6-8 3-14.1 6.5-17.8 9.7-3.6 3.3-4.5 5.6-4.5 7.3 0 1.7.9 4 4.5 7.3 3.7 3.2 9.8 6.7 17.8 9.7 15.9 6 39.1 10 64.7 10s48.8-4 64.7-10c8-3 14.1-6.5 17.8-9.7 3.6-3.3 4.5-5.6 4.5-7.3 0-1.7-.9-4-4.5-7.3-3.7-3.2-9.8-6.7-17.8-9.7-10.2-3.9-23.7-6.9-38.7-8.5zm-145.9 33.1c90 75 167.3 67.8 257.6 2-108.6 57.4-182.5 45.4-257.6-2zm-22.8 16.8c87.9 92.5 218.8 91.7 307.9 1.4-107.9 81.3-242.8 56.2-307.9-1.4z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMetalDetectorIcon);
    
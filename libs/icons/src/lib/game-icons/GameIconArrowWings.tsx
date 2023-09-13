
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconArrowWingsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'arrow-wings'];
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
        <path fill="currentColor" d="M352.5 29.01l89.7 40.72 40.7 89.77V29.01zM184.1 63.92c-43.8.15-84.93 7.61-117.57 12.12-1.32.19-2.21.42-3.18.66 1.08.97 2.41 2.06 4.08 3.25 12.49 8.9 39.77 21.65 75.47 33.95l32 11-33.2 6.3c-11.7 2.3-18.6 5.6-20.3 7.2l-.4.4c.1 0 .3.3.6.7 1.5 2.4 7.1 7.2 15.9 11.9s20.7 9.7 35.1 14.5l29 9.6-29.6 7.6c-10.5 2.7-18.3 6.2-22.4 9.3-4.1 3-3.8 3.9-3.7 4.3.1.4 2.2 4 9.8 7.9 7.7 3.9 20 8 37.1 11.4l28.5 5.6-26.6 11.5c-13.4 5.7-17.2 12.7-17.9 18.2-.7 5.4 2.3 9.9 4.2 11h.1c-1-.5 2.6.4 8.4-.2.8-.1 1.8-.2 2.7-.3L342 111.9c-47-35.76-99.5-46.92-149.1-47.91-2.9-.06-5.9-.08-8.8-.07zm222.1 9.25L55.52 424.1l40.65-8.2-8.1 40.6L438.8 105.8l-10.2-22.46zM400 170L250.2 319.8c-.1.9-.2 1.9-.3 2.7-.6 5.8.3 9.4-.2 8.4v.1c1.1 1.9 5.6 4.9 11 4.2 5.5-.7 12.5-4.5 18.2-17.9l11.5-26.6 5.6 28.5c3.4 17.1 7.5 29.4 11.4 37.1 3.9 7.6 7.5 9.7 7.9 9.8.4.1 1.3.4 4.3-3.7 3.1-4.1 6.6-11.9 9.3-22.4l7.6-29.6 9.6 29c4.8 14.4 9.8 26.3 14.5 35.1 4.7 8.8 9.5 14.4 11.9 15.9.4.3.7.5.7.6l.4-.4c1.6-1.7 4.9-8.6 7.2-20.3l6.3-33.2 11 32c12.3 35.7 25 63.1 33.9 75.5 1.2 1.7 2.3 3 3.2 4.1.3-.9.5-1.8.7-3.2C445.8 374 469.8 261.6 400 170zM29.08 359l32.99 33 28.3-28.3zm119.22 62.7L120 450l33 33z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconArrowWingsIcon);
    

  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconChargedArrowIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'charged-arrow'];
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
        <path fill="currentColor" d="M19.83 19.6v14.8L279.6 310.8l20.5-11.4 9.4-16.9L42.87 19.6zm140.87 0l25.2 53.3-16.2 4-51-37 43.4 62 34-7.3 26.2 55.5 75.3-43.4c17.6 26.7 32 48.1 46.2 72.7l-21.9 14-69.6-26.1 71.6 57c32-25.5-.1-.1 32-25.7l83.5 240.1C362 415.1 277.1 389.8 207.6 365c-20.9-13.7-43.2-31.7-60.6-50.4l43.7-18.1L109.5 168l-24.08 49.3-65.59-92.5v32.3l68.54 96.6 23.23-47.4 51.4 81.4-46.9 19.4c38.6 46.2 90 85.7 137.7 112.2l-137.9-2 15.6-39.6-66.44-33 7.19-30.1 46.55-41.9L69.04 292l-49.21-58.6v29.1l35.54 42.3-11.93 50 64.36 32c-5.8 19.5-15 36.6-25.49 53.7l-44.54-20.9 43.13 56.7 30.2-40.4 130.4 1.9-48.7 17.8 144.7 1.7c56.5 21.1 112.5 33.4 154.7 35.1-1.2-30.4-7.9-68-19.4-107.7l11.4-153.5-22.5 31.3-6.7-161.6 32.1-18.1L470.5 27l-7.2 43.6c-22.9 12.9-44.7 25.27-67.7 38l-49.3-89h-21.4L388.3 134l48.3-26.7 3.2 78.1-16.9-.4-4.2-49-18.2 59.5 40.4 16.4 3.9 94.8c-37.2-78.9-87.9-144.4-131.1-209.5l2.2-47.2-73.6-11 53.3 28-4.9 22.1-60.1 34.7-49.2-104.2zM352 244.2l-38.1 69-68.9 38.1 164.1 57.1z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconChargedArrowIcon);
    
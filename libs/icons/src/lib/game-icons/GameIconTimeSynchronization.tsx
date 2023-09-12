
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTimeSynchronizationIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'time-synchronization'];
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
        <path fill="currentColor" d="M112.9 20.05V50.5c15-6.4 31.5-9.95 48.8-9.95 17.4 0 33.9 3.56 48.9 9.99V20.05zm48.8 38.5c-59 0-106.74 47.65-106.74 106.65 0 59 47.74 106.7 106.74 106.7 59 0 106.7-47.7 106.7-106.7S220.7 58.55 161.7 58.55zm10.6 27.41l17.4 4.38-18 72.06 35 35-12.8 12.8-42.2-42.2zM18.15 159.9v18H37.6c-.42-4.2-.64-8.4-.64-12.7 0-1.8 0-3.5.12-5.3zm295.05 41.6l-8.9 35.8c17.7-9.8 38.1-15.3 59.8-15.3 19.3 0 37.6 4.4 54 12.3l-4.1-32.8zm50.9 38.5c-59 0-106.7 47.7-106.7 106.7s47.7 106.7 106.7 106.7 106.7-47.7 106.7-106.7S423.1 240 364.1 240zm118.8 20.7l-17.4 13.5c3.5 4.9 6.7 10.1 9.5 15.4l18.9-14.7zm-118.8 7.4c43.3 0 78.6 35.3 78.6 78.6s-35.3 78.6-78.6 78.6-78.6-35.3-78.6-78.6 35.3-78.6 78.6-78.6zm-153.5 11.8c-15 6.4-31.5 10-48.9 10-17.3 0-33.8-3.5-48.8-9.9v30.5h97.7zm153.5 6.2c-33.6 0-60.6 27-60.6 60.6s27 60.6 60.6 60.6 60.6-27 60.6-60.6c0-25.3-15.3-46.8-37.2-55.9L374.1 344l17.3 17.8-12.8 12.7-24.5-25 16-63c-2-.2-4-.4-6-.4zm-59.8 170l8.9 35.8H414l4.1-32.8c-16.4 7.9-34.7 12.3-54 12.3-21.7 0-42.1-5.5-59.8-15.3z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTimeSynchronizationIcon);
    
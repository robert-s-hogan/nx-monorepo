
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconJoystickIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'joystick'];
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
        <path fill="currentColor" d="M307.723 39.623c-25.627-.292-48.63 17.365-54.246 43.44-6.418 29.8 12.39 58.93 42.19 65.347 29.798 6.417 58.927-12.39 65.345-42.19 6.417-29.798-12.39-58.928-42.188-65.345-3.725-.802-7.44-1.21-11.1-1.252zm-37.543 117.88L237.123 311h47.055l30.97-143.81c-7.584.836-15.418.507-23.27-1.184-7.854-1.69-15.13-4.617-21.698-8.502zM198.486 329l-10 30h135.028l-10-30H198.486zM73 377v30h30v-30H73zm93.486 0l-10 30h199.028l-10-30H166.486zM409 377v30h30v-30h-30zM57 425v62h398v-62H57z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconJoystickIcon);
    
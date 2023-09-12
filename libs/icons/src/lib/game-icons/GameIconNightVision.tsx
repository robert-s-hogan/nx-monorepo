
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconNightVisionIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'night-vision'];
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
        <path fill="currentColor" d="M256 32a120 125 0 0 0-94.666 48.426A160 160 0 0 1 312.8 240a160 160 0 0 1-2.7 28.555A120 125 0 0 0 376 157 120 125 0 0 0 256 32zM82.77 325.59c-20.904.844-42.686 5.52-64.06 14.258C41.442 400.102 102.352 459.58 208 400c-11.572-32.98-37.17-55.623-69.445-66.71a11.164 13.258 0 0 0-3.733-.778 11.164 13.258 0 0 0-11.162 13.258 11.164 13.258 0 0 0 11.162 13.257 11.164 13.258 0 0 0 .317-.013c-3.8 27.26-9.967 50.298-15.478 50.662-12.182.507-29.582-40.02-36.892-84.086zm346.46 0c-7.31 44.066-24.71 84.593-36.892 84.086-5.727-.378-12.157-25.236-15.908-53.873a13.258 21.127 82.128 0 0 11.097.418 13.258 21.127 82.128 0 0 19.112-16.027 13.258 21.127 82.128 0 0-22.745-10.238 13.258 21.127 82.128 0 0-10.4 3.318c-32.3 11.08-57.916 33.73-69.495 66.727 105.647 59.58 166.557.102 189.29-60.152-21.374-8.74-43.156-13.414-64.06-14.258z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconNightVisionIcon);
    
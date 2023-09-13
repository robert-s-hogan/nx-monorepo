
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCableStayedBridgeIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'cable-stayed-bridge'];
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
        <path fill="currentColor" d="M113 41v446h30V41h-30zM95 60.35L18 114.9v22l77-54.5V60.35zm66 0V82.4L483.8 311H494v-14.7L161 60.35zM95 98.59L18 170.8v24.7l77-72.2V98.59zm66 0v24.71L361.2 311h26.4L161 98.59zm0 49.81v34.4L239.9 311h21.2L161 148.4zm-66 .1L18 273.6v34.3l77-125.1v-34.3zM18 329v30h77v-30H18zm143 0v30h333v-30H161z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCableStayedBridgeIcon);
    
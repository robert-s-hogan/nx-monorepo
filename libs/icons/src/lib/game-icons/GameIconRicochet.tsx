
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconRicochetIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'ricochet'];
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
        <path fill="currentColor" d="M375.8 280.9c48.7 0 88.3 39.5 88.3 88.2 0 48.9-39.6 87.9-88.3 87.9-48.7 0-88.2-39-88.2-87.9 0-48.7 39.5-88.2 88.2-88.2zm-35.2-34 24.9 13.2c-97.1 0-102.8 86.2-102.8 86.2l-12.9-22.4c12.3-36.4 47-71.9 90.8-77zm-37.1-19.6c-34.2 7.2-61.3 34.8-72.6 64l8.4 14.5c14.8-31 43.2-59.4 78.7-70.8zm-82.6 46.5-20.5-35.5-37.4 42.6 11.4-54-94.45 8.3 87.25-48.3-67.53-76.3 83.03 34.3V57.6l34.3 76.9 68.5-69.6-36.3 98.6L489 147.8v28l-232.1 26.8 26 13.8c-27.2 11.1-49.2 33.1-62 57.4zM31 250.4l94.3-60.4L27 216v63l87.6-30.1zm78.1-92.4L27 177v20l100.1-25.1zM301 143.7l153.8-11.9L489 120V94zM290.4 116l-10.8 17.6L489 81V70z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconRicochetIcon);
    
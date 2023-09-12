
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDemolishIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'demolish'];
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
        <path fill="currentColor" d="M122.717 22.137v84.37l44.033 54.585v171.564l8.086 6.47 48.78-159.35 56.56 171.35 57.043-70.876 26.452 74.793V161.09l44.03-54.584v-84.37h-48.915v39.798h-29.775V22.137h-49.448v39.797H250.32V22.137h-49.447v39.797H171.63V22.137zm101.404 218.68L184.298 370.9l-74.445-59.556 30.625 89.43-88.96 4.042 40.665 40.664-40.17 47.807h91.31l18.223-17.185-17.01-47.257 56.608 20.6 28.673-83.944 32.73 93.148 57.112-43.054 2.055 65.552 63.96-7.13-13.712 19.27h91.034l-64.685-49.722 45.72-64.255-83.635 21.515-29.354-82.99-57.79 71.81z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDemolishIcon);
    
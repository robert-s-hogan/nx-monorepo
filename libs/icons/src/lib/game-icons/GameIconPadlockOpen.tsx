
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPadlockOpenIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'padlock-open'];
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
        <path fill="currentColor" d="M402.6 164.6c0-78.92-65.7-146.47-146.6-146.47-81.1 0-146.6 65.49-146.6 146.47v72.3H159v-69.1c0-53.7 43.4-97.26 97-97.26 53.5 0 97 41.66 97 94.06zm-315.7 91C72.2 278.4 64 304.7 64 332.4c0 88.3 85 161.5 192 161.5s192-73.2 192-161.5c0-27.7-8.3-54-22.9-76.8zm168.8 23.9c22.3 0 40.9 18 40.9 40.3 0 16.8-10.6 31.2-25.1 37.3l32.7 98.2h-96.4l32.1-98.2c-14.5-6.1-24.5-20.6-24.5-37.3 0-22.3 18-40.3 40.3-40.3z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPadlockOpenIcon);
    
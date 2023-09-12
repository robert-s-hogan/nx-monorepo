
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCrackedHelmIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'cracked-helm'];
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
        <path fill="currentColor" d="M256 23.03c-20.017 6.62-39.933 15.483-59.25 26.407l80.97 62.813-22.19 22.344 79.657 60.562-149.406-46.47 30.595-29.405-81.28-25.686c-20.255 18.034-38.886 38.7-55.032 61.812 21.454 57.967 32.843 94.84 32.843 132.094 0 36.768-11.184 73.342-32.094 130C131.52 455 182.796 476.72 234 482.03c17.09-74.624 14.146-149.25 1.03-223.874-31.348 3.477-62.62 13.448-94.28 30.03v-71.31c34.855-9.803 71.26-13.905 107.438-14.157 46.513-.325 92.643 5.714 134.593 14.155v71.313c-31.484-15.732-62.28-25.594-92.75-29.5-11.7 74.133-11.706 148.24 1.376 222.375 47.406-6.535 94.89-27.41 142.094-63.72-34.54-114.55-34.35-146.13.656-261.812C392.203 90.048 318.514 45.07 256 23.03z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCrackedHelmIcon);
    
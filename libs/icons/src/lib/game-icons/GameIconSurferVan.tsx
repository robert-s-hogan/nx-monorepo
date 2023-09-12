
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSurferVanIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'surfer-van'];
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
        <path fill="currentColor" d="M95.62 85.74c-.52 0-1.15.19-1.7.29 3.33 16.27 3.94 31.37 3.37 45.77 13.11-1.2 26.01-2.2 38.71-3.1-12-13-17.7-33.88-33.9-41.54-1.9-.73-3.92-1.36-5.62-1.42zM252.5 142.7c-64 .2-127.2 4.3-187.72 10.3-3.65.7-15.03 2.2-14.51 7.9.15 1.9 2.78 6.5 13.25 6.1 128.68-5.2 233.88-10.5 361.08 0 5.4-.2 15.8 1.3 19.4-3.4-4.1-6.9-14.1-9.7-21.2-10.7-56.6-7.5-113.8-10.4-170.3-10.2zm58.4 36.6V199h18v-19.2c-6-.2-12-.4-18-.5zm-126 1.1l-18 .6v18h18zM83.87 217c-14.5 0-28.92 3.8-39 10.5-10.09 6.7-16 15.5-16 28.5v.1L26.91 327H486.9v-5.6c-7.9-23.9-15.8-51-25.2-71.7-4.8-10.5-10-19.2-15.2-24.8-5.1-5.6-9.6-7.9-14.6-7.9zm-21.99 23h80.02v23H45.59l.29-7c0-7.2 7.29-16 16-16zm98.02 0h184v64h-184zm202 0h58c28 0 33.2 38.5 40 64h-98zM44.84 281h97.06v23H43.88zm-18.43 64l-1.29 46h62.57c7.37-4.4 16.01-7 25.21-7 23.6 0 43.3 16.8 48 39h166.8c4.3-22.7 24.3-40 48.2-40 9.9 0 19.1 3 26.8 8h84.2v-46zm349.49 56c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31zm-263 1c-17.26 0-31.03 13.8-31.03 31s13.77 31 31.03 31c17.2 0 31-13.8 31-31s-13.8-31-31-31zm-85.54 7c1.24 2.3 2.9 4.6 4.92 6.6 4.64 4.6 10.81 7.4 16.27 7.4H64.9c1.04-5 2.85-9.7 5.29-14zm391.74 0c2.4 4.3 4 9 5 14h22.3l40.5-13.5v-.5z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSurferVanIcon);
    
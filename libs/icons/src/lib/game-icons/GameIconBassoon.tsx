
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBassoonIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'bassoon'];
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
        <path fill="currentColor" d="M440.6 37.16c-4 4.07-4.1 10.64 0 14.71l28.3 28.28c4.1 4.12 10.7 4.16 14.8.1 4-4.07 4-10.72-.1-14.79l-28.3-28.3c-4.4-4.08-10.9-3.59-14.7 0zm-10.8 25.16c-24 14.9-44.7 34.7-60.5 58.18l30.7 30.6c23.5-15.8 43.3-36.4 58.2-60.48zM185.4 132.9l38.6 17.5 7.2-17.2s-.2 0-.5-.1c-15.9-5.8-29.1-3.3-45.3-.2zm80.4-.1c-7.1 2.1-15.3 5.8-25.6 4.2l-5.5 16.2c11.4 2.5 20.9.2 29.3-2.4 5-1 11.3-4.7 15.8-2.9 1.3.5 2.5 1.7 3.7 3.4 3.5 4.5 2.2 10-.9 16.4-7 14.3-23.5 31.8-44.7 52.9l11.8 11.8c22.8-22.8 40.3-41.9 47.8-57.3 6.5-13.3 6.3-24.6-.6-33.9-4-5.2-8.1-7.9-12.3-9.3-6.3-2-13.2-.7-18.8.9zm92.9.6-11.3 11.4 28.3 28.3 11.4-11.4zm-23.1 23.2-17.3 17.3c-1.1 3.1-2.4 6.2-3.9 9.4-8.2 16.7-26.7 37.7-51.4 62.4l20.1 20 80.8-80.8zm-110 74.5-9.4 9.4 13 13.1 9.4-9.4zm-21.2 21.2-9.2 9.2 13 13 9.2-9.2zm43.2.9-72.3 72.2 24.1 24.1 72.2-72.3zm-64.2 20.1-9.2 9.2 13 13 9.2-9.2zm-21 21-9.1 9.1 13 13 9.1-9.1zM137.7 319l-9.2 9.2 9.8 23c1.4 3.1.7 6.8-1.7 9.2l-32.4 32.4c-3.3 3.2-8.57 3.2-11.77 0-3.3-3.3-3.3-8.5 0-11.8l28.37-28.4-5-11.7-53.97 54 46.07 46 75.9-75.9zm-91.4 91.7-21.01 35.6 31.48 31.4 35.56-21z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBassoonIcon);
    
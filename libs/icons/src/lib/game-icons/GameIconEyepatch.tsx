
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconEyepatchIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'eyepatch'];
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
        <path fill="currentColor" d="M256 19.3c-38.4 0-74.1 19.04-102.5 51.82 18.6 36.68 63.9 91.48 115.2 138.38.7-.6 1.5-1.1 2.3-1.4 43.5-16.6 121.9-10.2 128.2 14.3 4.7 18.2 10.5 46.4-.6 74.9 6.5 2.4 12.7 4.3 18.5 5.6 2.2-15.1 3.3-30.9 3.3-47 0-66.1-19.1-125.8-49.2-168.5C341 44.72 300.4 19.3 256 19.3zM141.3 86.6c-.2.27-.4.53-.6.8-30.1 42.7-49.1 102.5-49.1 168.5 0 66.2 19 125.9 49.1 168.7 30.2 42.7 70.9 68.1 115.3 68.1 44.4 0 85-25.4 115.2-68.1 19.8-28.2 34.9-63.7 42.9-103.7-7.8-1.6-15.7-4.1-23.9-7.3-.9 1.5-1.9 3-3 4.5-6.8 9.4-75.1 8.2-110.1-11.7-12.1-6.9-18.7-51.9-15-78.7-51.7-46.3-97.9-99.7-120.8-141.1zm18.4 144.6c1-.1 2.1 0 3.1 0-6.8 5.3-11.2 13.6-11.2 22.9 0 15.8 12.9 28.8 28.8 28.8s28.9-12.9 28.9-28.8c0-4.6-1.1-9-3-12.8 13.3 5.5 26.4 13.6 39.4 23.6-37.1 62.1-128.8 25-137.2-22.5 16.6-7.4 32.8-11 48.7-11.2h2.5z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconEyepatchIcon);
    
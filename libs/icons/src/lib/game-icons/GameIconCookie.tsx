
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCookieIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'cookie'];
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
        <path fill="currentColor" d="M266.9 31.85C158.6 30.52 30.27 148.3 32 256c1.82 113.4 142.9 231.4 256 224 95.5-6.2 189.9-119.7 189.8-215.4C477.7 161.1 375.4 36.94 272 32c-1.7-.08-3.4-.13-5.1-.15zm24.8 20.97c1 .04 1.9.18 2.9.41 16.7 4.1 27.3 37.42 15 49.47-12 11.8-44 .6-48-15.74-3.5-14.32 15.1-34.72 30.1-34.14zM135.4 131.4c1.4 0 2.7.2 4 .5 17.9 4.1 31.6 34.3 22.5 50.3-7.5 13.1-30.6 9.8-45 5.2-8.9-2.8-21.07-9.3-20.95-18.7.23-17.2 20.55-36.9 38.15-37.3h1.3zm238.7 69.5h1.2c12.1.2 24.7 14.9 25 27 .3 10.6-10.4 22.9-21 24-11.5 1.2-26.1-9.5-27.7-21-1.7-12.4 10-29.2 22.5-30zm-141 105.7c15.4 0 26 22.1 27 37.5.7 11.9-5.4 29.7-17.2 31.5-16.1 2.5-33.8-17.6-35.3-33.8-1.3-14.4 11-35.2 25.5-35.2zm188.6 1.1c1.2 0 2.2.1 3.3.4 11.7 3.2 17.8 26.9 9 35.2-8.5 8.1-30.9.9-33.7-10.5-2.5-10.2 10.6-24.8 21.4-25.1zm-269.6 19.9c19.2-.5 36 30.2 30.8 48.7-3.7 13.1-23.1 18.2-36.8 18-9-.1-21.4-4-24-12.7-5.9-19.7 9.4-53.4 30-54zm166.2 87.6c.3 0 .7.1 1 .1 11.3 1.1 21.2 17.4 18.8 28.5-2.2 10.1-16.2 18.7-26.3 16.5-8.8-1.9-15.8-13.5-14.9-22.5 1-10.2 11.2-22.8 21.4-22.6z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCookieIcon);
    
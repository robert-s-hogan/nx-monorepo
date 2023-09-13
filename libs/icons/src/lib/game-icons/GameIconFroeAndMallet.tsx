
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFroeAndMalletIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'froe-and-mallet'];
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
        <path fill="currentColor" d="M188 39.99c-2.5 0-5.1.86-7.3 2.43-21.1 16.17-35.7 36.85-43.6 62.08-1.6 5.1.2 10.7 4.6 13.9 30.6 21.4 149.7 105.3 149.7 105.3l18.8-5.2 36.2-51.4-1.4-19.5L195.2 42.2c-2.1-1.52-4.7-2.25-7.2-2.21zM73.44 56.61l-42.5 5.03s10 89.26 21.9 184.56c3.95 31.8 8.22 64.1 12.22 94.1l40.14-4.7c-3.1-30.1-6.52-62.6-10.02-94.4C84.51 145.8 73.44 56.61 73.44 56.61zM357.9 183.6l-29.6 42s6.4-.8 15.9 4.2c12.3 6.4 25.1 23.7 42.4 36.8 3.6 2.6 7.5 5 11.4 7.3 9.5 5.7 19.8 9.5 28.1 14.9 2.6 1.7 5 3.5 7.1 5.5 6.8 5.9 9.8 13.6 14.9 15.5 8.1 3.2 10.7-.8 10.7-.8l21.6-30.6s2.8-3.7-3-10.4c-3.4-4-11.7-4.4-19.6-8.6-2.5-1.4-5.1-3-7.6-4.9-7.8-6.1-14.9-14.3-23.4-21.6-3.5-2.9-7.1-5.7-10.8-8.1-18-11.9-38.7-18.3-48.7-27.4-8.2-7.3-9.4-13.8-9.4-13.8zm-31.8 152.2-188.6 22.3 4.1 35.5 214.2-25.3c-6.7-13.1-17-24.4-29.7-32.5zm-210.4 15.5-58.73 7 8.89 75.3 58.74-6.9zM362 384.9l-208 24.4c6.5 1.1 12 6.2 12.7 12.3l197.8-23.1s-.1-.8-.3-2.3c-.4-3.8-1.2-7.6-2.2-11.3zm-245.4 60.4-37.1 4.1c.23 2 .4 4.1.47 6.1.45 10.3-.61 16.5-.61 16.5l42.54-5.2s-2.5-5.1-4.5-16.4c-.3-1-.6-3.1-.8-5.1z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFroeAndMalletIcon);
    

  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconArmoredBoomerangIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'armored-boomerang'];
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
        <path fill="currentColor" d="M420.2 27.03L342.6 169.4 485 91.76c-1.5-2.61-3.6-5.88-6.4-9.57-5.9-7.77-14.2-17.06-23-25.83-8.7-8.76-18-17.05-25.8-22.94-3.7-2.79-6.9-4.93-9.6-6.39zm-25.4 9.06L165 53.77C173.3 63.41 181 75 187.1 87H367l27.8-50.91zM128.1 48.12L26.3 56.21c3.16 12.58 11.96 30.8 21.36 46.09 9.91 16.1 18.38 27.4 21.2 31.1L169.8 143c5.1-.1 7.5-1.2 8.9-2.5 1.4-1.3 2.5-3.3 2.9-7.1.8-7.6-2.4-20.8-8.6-34.04-6.2-13.26-15.1-26.79-24-36.56-8.9-9.7-18.1-14.58-20.9-14.68zM194.9 105c3.7 10.4 5.6 20.6 4.6 30.1l137.3 7.3 20.4-37.4H194.9zm281 12.2L425 145v179.9c12 6.1 23.6 13.8 33.2 22.1l17.7-229.8zM407 154.8l-37.4 20.4 7.3 137.3c1.6-.2 3.3-.3 4.9-.3 8.1 0 16.6 1.9 25.2 4.9V154.8zm-221.4 30.8l-127.96 128 12.72 12.8 128.04-128-12.8-12.8zm112 16l-255.96 256 12.72 12.8 256.04-256-12.8-12.8zm16 112l-128 128 12.8 12.8 128-128-12.8-12.8zm68.1 16.7c-1.1 0-2.2 0-3.1.1-3.8.4-5.8 1.5-7.1 2.9-1.3 1.4-2.4 3.8-2.5 8.9l9.6 100.9c3.7 2.9 15 11.3 31.1 21.2 15.3 9.4 33.5 18.2 46.1 21.4l8.1-101.8c-.1-2.8-5-12-14.7-20.9-9.8-8.9-23.3-17.8-36.6-24-11.6-5.4-23.1-8.6-30.9-8.7z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconArmoredBoomerangIcon);
    
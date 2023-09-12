
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHatchetIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'hatchet'];
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
        <path fill="currentColor" d="M281 24.15L246.4 77.2l80 51.7 55.7 129.4c5.6-2.6 13.4-6.9 21.8-12.7 12.7-8.9 27.2-20.9 40.3-34.4 13.2-13.5 25.1-28.4 32.7-42.8 6.6-12.6 9.9-24.5 9-34.8L359.1 74.97zm-33.4 75.26C164.4 214.2 107.9 325.2 25.98 453.3c0 .1 0 0 .15.4.32 1.1 1.49 3.4 3.53 5.9 4.07 5.1 11.33 11.4 19.22 16.5 7.89 5.1 16.55 9.2 22.88 10.9 3.16.8 5.71.9 6.88.8.37-.1.37-.1.47-.1 21.99-33.8 31.99-49 48.09-110.3l.3-1.3.8-1.1c60.5-97.7 84.9-157 155-252.5z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHatchetIcon);
    
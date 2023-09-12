
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPlungerIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'plunger'];
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
        <path fill="currentColor" d="M462.4 24.96c-2.6.1-5.1 1.03-7.1 3.08L244 239.3c12.7 4.6 24.1 16.1 28.8 28.7L483.9 56.76c10.3-10.19-6.8-31.04-20.3-31.8h-1.2zM232.2 255.2c-2.6 0-5.1 1-7.1 3.1l-27.4 27.2-6.4-6.3c-17.4-17.5-51.1-23-85.9-17.8-16.67 2.4-33.36 7.2-48.33 13.7 6.45 2.3 13.23 5.4 20.36 9.2C103.1 298 133 320.8 162.1 350c29.1 29.1 52 59 65.7 84.6 3.8 7.1 6.9 13.8 9.2 20.3 6.4-15 11.2-31.7 13.7-48.3 5.1-34.8-.3-68.4-17.9-85.9l-6.3-6.4 27.2-27.3c10.3-10.1-6.8-31-20.3-31.8zM34.68 288.4c-4.25-.1-6.56.9-7.67 2-1.46 1.5-2.76 5.1-1.56 12.6 1.21 7.5 5.09 17.7 11.25 29.4 12.58 23.3 34.5 52.3 62.56 80.4 28.14 28 57.14 50 80.44 62.6 11.7 6.1 21.9 10 29.4 11.2 7.5 1.2 11.1-.1 12.5-1.6 1.5-1.4 2.9-5.1 1.6-12.5-1.2-7.5-5.1-17.7-11.2-29.4-12.6-23.3-34.5-52.3-62.6-80.4-28.1-28.1-57.12-50-80.46-62.6-11.67-6.1-21.92-10-29.34-11.2-1.88-.3-3.51-.5-4.92-.5z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPlungerIcon);
    

  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconShoonerSailboatIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'shooner-sailboat'];
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
        <path fill="currentColor" d="M126.7 81.85L57.46 159l84.64 63.6c-4.8-46.9-9.8-93.8-15.4-140.75zm160.4 9.2l-30.2 2h-.1l1.4 23.45c12.2-.4 24.8 1.6 37.6 6.1l5.7-.4zm-42.5 2.6l-29.9 1.9-9.6 33.15 6.1-.5c11.3-6 22.9-9.6 34.8-11.1l-1.2-23.45zm60.3 40.05l-45.6 3.1h-.1l4 68.2c26.1-1.3 52.4 2.3 79 10.2zm-58.3 3.6l-43.9 3-14.6 46.9 36.9 22.6c8.4-1.9 16.8-3.3 25.2-4.1l-3.5-68.4zM53.53 173.5L19.99 366.3l131.91 4c-4-42.7-4.2-85.4-8.5-128-30.1-22.4-60.01-45.8-89.87-68.8zm114.77 17l2.1 178.7 88.3 1.1-10.1-128.6zm144.4 33.4l17.9 29.6 82.8 80.7 71-3.8zm-24 9.8l5.7 25.2 52.3 97 70.1 2.6zm-23.4 3.4L278 376.4l53.1-8.2zm232.2 107.1l-131.1 40.9-1.3 15.8L498 358.5zm-144.3 40.3l-16.2.3-3.3 9.1c-100 7.9-190.9 11.1-288.67 9.9l13.02 13.4c6.11 3.7 19.79 4.2 20.93 13H345.8c3.7-13.3 5.3-32.4 7.4-45.7z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconShoonerSailboatIcon);
    
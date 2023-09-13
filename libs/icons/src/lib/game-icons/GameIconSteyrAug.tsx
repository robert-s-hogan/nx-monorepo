
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSteyrAugIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'steyr-aug'];
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
        <path fill="currentColor" d="M231.2 109.4l14.8 14.9-120.4 120.3-14.8-14.9zm-25.6 83.2l17.8 1.5-19.4 19.5-17.9-1.5zM336.7 109l21.1 4.5 16.4-16.42 15.4 15.42c-14 14.6-145.8 146.8-149.4 149.8l-77.5 173.9c-.8 1.7-.4 3.8 1 5.1l13.5 12.6c1.8 1.7 1.9 4.6.1 6.4l-31.2 31.3c-1.5 1.6-4 1.8-5.8.5l-82.2-57.4c-14.45-10.1-16.26-30.8-3.8-43.3zm117-89.92l12.3 12.2-33.6 33.7-2.1-2.1-31.2 31.1-8.4-8.5 31.1-31.1-1.7-1.7zM293.9 236.3l.1-.1zm0 0l10.3 10.3c-5 4.6-11.9 12.1-12 17.6.8 11.2 11.3 44.6 21.6 48.5l5.9-6c11.7-11.8 11-18.1 10.2-24.3-1.7-14.8-8-50.6-11.6-70.6l11.4-11.4c2.8 15.4 11.3 62.4 13.4 80.5 1.1 9.5 1 20-13.9 35.1-11.3 11.4-20.4 20.5-30.8 30.9 0 0-34.6-27.1-32.3-58.6.6-7.7-5.9-13-9.6-13.9 12.2-12.8 24.9-25.6 37.4-38.1zm86.8-83.2l51.9 51.8-14.8 14.9-51.9-51.9zM222.1 351.6l64.3 36-27.1 48.3-59.9-33.5z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSteyrAugIcon);
    

  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCrackedAlienSkullIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'cracked-alien-skull'];
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
        <path fill="currentColor" d="M256.9 22.74h-.5L293 62.75l104.8 26.06 32-30.39c-51.7-27.87-117.3-36.95-172.9-35.68zm-25.4.55c-42 1.81-80.4 8.19-112.5 19.42-38.47 13.45-68.31 34-82.82 62.99-24.01 48-17.3 98.4-3.49 146.6l1.48 5.1 5.21 1.3c35.4 9 66.82 21.6 94.52 37.5 43.1 33.5 63.5 74.6 64.8 127.6.7 29.9 9.8 62.8 28 75.3-1.1-20.2.6-62.9 5.3-81.2l23.9 81.8 24.5-83.5c5 18.7 6.4 62.1 5.3 82.9 18.1-12.5 27.3-45.4 28-75.3 1.3-51.4 20.6-91.7 61.1-124.7 28.9-17.3 62-30.8 99.5-40.4l5.2-1.3 1.5-5.1c13.8-48.2 20.5-98.6-3.5-146.6-7.1-14.25-17.9-26.44-31.6-36.77l-34 32.27-39.8 84.3 15.6-79.9-96.1-23.93c-32.6 11.71-57.1 31.13-74.5 60.93l59 75.4-112.2 32.5c8.6 17.5 15.2 36.3 19.6 56.6-37-29.1-81.7-51-134.16-65-11.12-40.4-15.83-79.4-1.53-116.6 14.49 10.1 28.22 20.6 41.02 31.6 23.97-40 55.97-64.72 101.87-81.04-38.9 30.14-63.7 59.64-76.9 104.54 15.8 16.4 29.6 33.9 41 53l89.5-25.9-49.6-63.4 2.9-5.3c17.5-32.7 43.2-55.75 75.7-70.08l-41.8-45.63zM465.9 125.5c14.3 37.2 9.6 76.2-1.5 116.6-52.5 14-97.2 35.9-134.1 65 25.6-79.3 80.9-142.9 135.6-181.6zM316.4 274.9l-59 121.5-59.1-121.5 59.1 65.5c19.7-21.8 39.3-43.7 59-65.5z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCrackedAlienSkullIcon);
    
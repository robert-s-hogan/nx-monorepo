
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconShatteredHeartIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'shattered-heart'];
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
        <path fill="currentColor" d="M112 16c-22.1 4.7-42.55 16.45-58.12 35.68l80.32 75.42L112 16zm31.9 20.77c-.9 0-1.7.1-2.6.1l26.6 132.83 88.8 40.4 10.3-75.4c-17.2-63.6-70.1-97.97-120.7-97.93h-2.4zm226.7 41.18c-24 .1-49.2 7.75-72.6 24.35l-13.7 99.9 62.3 28.3 134-53.6c-6.5-60.1-55.1-99.25-110-98.95zM55.11 89.9c-5.99 10.5-10.78 22.6-14.01 36.4-14.83 63.3 15.59 125.4 51.48 181.8l56.62-129.8-94.09-88.4zM176.9 193.6L265 407.5c27.1-13.4 57.2-27.4 85.8-43.5l-22.6-101.7-151.3-68.7zm293.9 18.2l-124.4 49.7 20.7 92.9c47.5-28.8 88.1-64.5 99.7-114 2.3-9.9 3.6-19.4 4-28.6zm-314.9 16.1l-55.5 127.2c36.3 54.6 73.7 103.2 73.7 141.5 10.9-18.8 37.8-35.2 70.9-52.2l-89.1-216.5z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconShatteredHeartIcon);
    
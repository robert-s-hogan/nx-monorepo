
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconForestEntranceIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'forest-entrance'];
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
        <path fill="currentColor" d="M133.5 20.19h-18c-6.9 27.94-31.46 41.26-52.27 57.06l-5.99-57.06H26.78l.39 467.51 97.23-1.3c-19.3-15.2-38.16-33.1-50.33-52.6l-1.01-1.7-.26-1.9c-9.22-86.5-5.79-172.4-1.97-247.3l38.17-20c16.4 16.2 20.3 35.5 16.4 51.8l17.6 4c4.8-20.7-.4-44.7-17.7-64.4l72.6-38.1c-7.7-5.8-14.9-11.9-21.7-18.09L70.3 134.7l-4.52-36.76c26.16-21.01 67.02-45.28 67.72-77.75zm260.8 0l16.8 160.01c-37-11-56.6-44.2-39.4-78l-15.8-8.63c-10.1 18.53-10 39.43-5.2 58.13-62.4-30.4-122.1-63.37-176.6-101.21l-11.2 7.46c47.6 47.75 86.9 73.35 144 94.25-22.2 22.3-53.7 34.1-78.5 41.7l12.9 15.4c33.7-11 59.5-22.7 86.1-39.3 25.9 19.7 58.8 25.3 85.6 37.9l10.2 105.6c-20-14.1-40.4-21.1-61.9-19.2l-6 13.2c23.2 5.7 42.3 7.2 57.5 20.8-2.7 46.1 1.6 91.3-8.7 131.8-30.3 6.2-62.1 14.8-88.5 23.8l172.8-2.8-.1-460.91zm-23.9 21.04l-31.5.67-94.2 32.56c6.6 3.94 13.2 7.83 20 11.66z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconForestEntranceIcon);
    
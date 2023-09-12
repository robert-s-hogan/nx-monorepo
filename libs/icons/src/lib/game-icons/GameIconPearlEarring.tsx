
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPearlEarringIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'pearl-earring'];
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
        <path fill="currentColor" d="M293.5 28.29h-5c-34.3.53-69.7 10.73-97.5 27.01-40.3 23.61-68.1 72.3-75 118.5-9 60.5 36.6 117 48.7 176.9 4.5 25.4 17.9 49.6 35.1 62.9 5.6-25.6 28.5-44.9 55.7-44.9 9.2 0 17.9 2.2 25.7 6.1 37.1-65.5 127.1-134.4 131.7-219 2.2-40.1-15.9-88.7-50.2-109.49-20.1-12.17-44.3-17.71-69.2-18.02zm-4.6 47.59c30.9.1 61.8 12.17 84.7 42.12l-14.2 11c-26.4-34.43-61.7-40.41-97-31.93-35.3 8.43-69.5 32.73-87.4 57.93-7.8 11.1-10.3 28.2-8.4 48.2 1.9 20 8.1 42.5 15.6 63.4 2.2 6.3 4.6 12.4 7 18.3 11.6-8.7 25.2-15.1 41.1-15.1 18.7 0 39.4 8.7 63.4 28.9l-11.6 13.8c-22.1-18.5-38.7-24.7-51.8-24.7-12.6 0-23 5.4-33.9 14.3 10.9 24.5 20.4 41.6 20.4 41.6l-15.6 8.8s-20.5-36.3-36-79.9c-7.7-21.7-14.3-45.4-16.5-67.7-2.1-22.3 0-43.8 11.7-60.3 20.8-29.4 57.6-55.39 97.8-65.03 10-2.41 20.3-3.69 30.7-3.69zM354 337.7c-6.3 31.3-25.2 43.8-56.5 37.5 31.3 6.3 43.8 25.2 37.5 56.5 6.3-31.3 25.2-43.8 56.5-37.5-31.3-6.3-43.8-25.2-37.5-56.5zm-98.5 49c-21.6 0-39 17.4-39 39s17.4 39 39 39 39-17.4 39-39-17.4-39-39-39zm-111.3 28.4c11 22.9 5.1 39.8-17.8 50.8 22.9-11 39.8-5.1 50.8 17.8-11-22.9-5.1-39.8 17.8-50.8-22.9 11-39.8 5.1-50.8-17.8z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPearlEarringIcon);
    
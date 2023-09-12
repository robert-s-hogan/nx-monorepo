
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconWoodStickIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'wood-stick'];
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
        <path fill="currentColor" d="M328.5 32.86l-11.2 2.46-24.6 110.98-62.1-48.6c-1.5 2.4-2.6 4.6-3 6.8-.9 3.7-.5 7.6 2.3 13l58.2 47.6-12.9 93.5-2.4 2.2c-57.5 53.5-130.5 102.9-198.52 153 9.71 2.4 18.73 6.9 25.22 14.3 7 7.8 9.9 18.3 10.1 28.7C226.7 353.3 375.8 223.5 473 114.2c2.2-8.5.9-10.9-1.3-13.4-1.4-1.73-4.4-3.63-7.7-5.83C427.2 131.7 362.8 196.9 316.8 229.4l-16.9 12zM292.4 374.9c-25.4 6.8-50 9.3-74.5 10.1-6.9 6.1-13.7 12.2-20.5 18.3 17.2 0 34.6-.5 52.4-2.4 11.8 23 33.9 36.3 53 49.5l10.2-14.8c-17.4-12-33.9-22.6-43.8-37.3 9.1-1.5 18.4-3.5 27.8-6zm-234.53 55c-8.44.2-15.64 3-18.86 6.9-1.35 1.7-1.73 5 .1 10.3 1.83 5.4 5.79 11.6 9.31 15.4 4.78 5.2 12.43 11.1 19.57 14.2 7.13 3 12.6 3.2 16.09.9 3.67-2.4 6.98-9.2 7.44-17.2.46-8.1-2.11-16.5-5.48-20.3-4.41-5-14.5-9.4-24.48-10.1-1.25-.1-2.48-.1-3.68-.1z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconWoodStickIcon);
    
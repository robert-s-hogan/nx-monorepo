
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPillowIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'pillow'];
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
        <path fill="currentColor" d="M433.79 59.602c-8.94.047-20.654 3.077-34.966 9.876C295.2 62.252 170.14 77.352 86.788 103.535c-60.407-27.913-70.404-.426-42.95 36.186C10.242 239.454 24.97 340.803 60.7 413.31c-11.01 47.633 16.965 45.498 41.172 26.452 170.77 9.1 281.83-16.52 349.88-68.666 24.01 19.23 41.66-6.006 31.868-36.856 11.922-71.81-9.07-167.31-36.093-233.78 13.362-23.473 8.022-40.975-13.737-40.858zm-357.386 77.96c52.65 61.045 53.612 200.38 21.748 283.403 7.046-90.91 2.505-223.673-21.748-283.404z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPillowIcon);
    

  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconRogueIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'rogue'];
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
        <path fill="currentColor" d="M377.47 20.72l-16.283 9.186 22.844 40.47-114.405-10.25-13.03 14.812-4.47 27.5c-36.887 12.27-63.294 26.753-83.375 46.03-22.722 21.813-38.17 50.42-51.75 90.5l-31.25 3-12.844 14.595 2.53 106.062c-3.8 1.61-7.374 3.92-10.56 6.906-.12.113-.228.232-.345.345l-39-25.53L15.28 360l39.595 25.875c-3.366 11.778-.637 25.006 8.344 34.594 7.98 8.52 19.12 12.27 29.905 11.186l30.688-48.375c-.246-.212-.505-.41-.75-.624-1.62-4.136-4.03-8.03-7.25-11.47-2.524-2.693-5.36-4.913-8.407-6.655l8.78-79.124 90.658-.656c-8.33-27.148-2.43-56.865 18.562-76.53 13.287-12.448 30.203-18.614 47.563-18.907 6.4-.11 12.852.597 19.217 2.062l6.22-85.938 74.124-3.343c.967 7.163 4.09 14.104 9.408 19.78 3.314 3.54 7.157 6.263 11.312 8.157l.375.5 50.125-27.405c1.763-10.675-1.284-22.027-9.25-30.53-8.932-9.538-21.832-13.137-33.75-10.626l-23.28-41.25zm87.186 92.31l-75.125 41-4.81 25.626 31.624-16.406c30.88 48.452 54.04 102.334 74.062 158.438 12.075-66.802 1.912-127.814-22.812-185.032l23.062-11.97-26-11.655zm-191 94.876c-13.12.182-25.73 4.814-35.47 13.938-22.26 20.854-22.1 58.245 1.876 83.844 23.98 25.6 61.27 28.23 83.532 7.375 22.26-20.855 22.104-58.274-1.875-83.875-13.49-14.4-31.194-21.516-48.064-21.282zm-95.937 174.28l-33.282 3.408-41.907 66.125 10.907 31.06 15.063-23.56c54.545 27.254 113.684 40.662 179.75 33.124-53.016-22.93-103.78-48.64-149.063-81.156l18.532-29z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconRogueIcon);
    
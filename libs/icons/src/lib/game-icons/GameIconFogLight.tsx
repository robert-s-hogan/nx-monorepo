
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconFogLightIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'fog-light'];
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
        <path fill="currentColor" d="M441.6 57.64s-16.6 16.6-33.1 41.37c-11.4 17.19-23.1 38.39-29.2 61.39l-41.3-9.2-4 17.6 41.9 9.3c-.6 4.6-.9 9.2-.9 13.9 0 35 18.6 54.4 34.6 70.4l.9.9-72.5-16.1-4 17.6 96.2 21.4c5.4 8.8 8.8 19.2 8.8 33.8 0 14.5-3.7 29.4-9.4 43.6L338 343.2l-4 17.6 87.9 19.5c-4.2 8.1-8.8 15.7-13.4 22.7-15.5 23.2-30.9 38.6-30.9 38.6l12.8 12.8s16.6-16.6 33.1-41.4c5.7-8.6 11.5-18.3 16.6-28.6l37.9 8.4 4-17.6-34.5-7.7c5.7-15 9.5-31 9.5-47.5 0-11.1-1.9-20.6-4.9-29l25.9 5.8 4-17.6-41.4-9.2c-5.7-7.7-12.1-14.3-18.2-20.4-16-16-29.4-28.6-29.4-57.6 0-3.3.2-6.6.6-10l84.4 18.8 4-17.6-85-18.9c5.5-20 15.9-39.4 26.5-55.3 15.5-23.24 30.9-38.64 30.9-38.64l-12.8-12.72zM256 121c-45.5 0-104.7 19.5-151.5 46.8-23.36 13.6-43.7 29.2-57.84 44.8C32.52 228.1 25 243.4 25 256c0 12.6 7.52 27.9 21.66 43.4 14.14 15.6 34.48 31.2 57.84 44.8 46.8 27.3 106 46.8 151.5 46.8 1.5 0 4.2-1.3 7.9-7.8 3.8-6.6 7.4-17.2 10.3-30.2 5.8-25.9 8.8-61.5 8.8-97s-3-71.1-8.8-97c-2.9-13-6.5-23.6-10.3-30.2-3.7-6.5-6.4-7.8-7.9-7.8z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconFogLightIcon);
    
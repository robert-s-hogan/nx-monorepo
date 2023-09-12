
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPirateCannonIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'pirate-cannon'];
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
        <path fill="currentColor" d="M406.4 67.25c-2.1 0-4 .8-5.7 1.9-4.3 2.9-7.6 8.4-.8 18.6l53.4 79.85c6.8 10.2 13.2 9.3 17.5 6.4 4.4-2.9 7.7-8.4.9-18.6l-53.5-79.85c-4.2-6.4-8.3-8.4-11.8-8.3zM392 108.4l-141.2 88.5c4.6 12.4 12.1 26.2 21.1 38.8l1.8 2.4a24 24 0 0 1 3.6-.3 24 24 0 0 1 22.2 15h21.6l109.2-87.2zm-156.8 98.3l-99.1 62.2c4.1 17.3 11.5 33.6 21.7 47.9h54.5v-64h42.8a24 24 0 0 1 3-5.4c-.3-.4-.6-.9-.9-1.3-9-12.6-16.7-26.1-22-39.4zm-4.9 64.1v64h-64v64h-64v46h209.1c-6.9-8.5-11.1-19.3-11.1-31 0-23.9 17.3-43.9 40-48.2v-94.8zm-110.2 8.1l-34.2 21.5c-25.6 18.3-12.3 58.4 11.54 80.4h50.86v-46.6c-12.9-16.3-22.6-35.1-28.2-55.3zm309.2 39.9c-17.2 0-31 13.8-31 31 0 5.6 1.4 10.8 4 15.3 10.7 1 20.4 5.6 28 12.5 7-6.4 16-10.8 25.9-12.3 2.6-4.5 4.1-9.8 4.1-15.5 0-17.2-13.8-31-31-31zM66.66 370.9c-3.61 4-8.24 7.8-13.57 11-11.26 6.8-25.19 11.1-35.41 11.4l.58 18c14.31-.5 30.29-5.6 44.18-14 5.38-3.3 10.5-7.1 14.96-11.5-4-4.6-7.61-9.6-10.74-14.9zm282.64 11.9c-17.2 0-31 13.8-31 31s13.8 31 31 31c3.2 0 6.2-.5 9-1.3-6.2-8.3-10-18.6-10-29.7 0-11.1 3.8-21.4 10-29.7-2.8-.8-5.8-1.3-9-1.3zm48 0c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31zm66 0c-8.7 0-16.5 3.5-22.1 9.2 3.2 6.6 5.1 14 5.1 21.8 0 7.8-1.9 15.2-5.1 21.8 5.6 5.7 13.4 9.2 22.1 9.2 17.2 0 31-13.8 31-31s-13.8-31-31-31z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPirateCannonIcon);
    
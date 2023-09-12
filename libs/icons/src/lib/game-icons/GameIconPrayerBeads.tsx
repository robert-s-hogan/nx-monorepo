
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPrayerBeadsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'prayer-beads'];
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
        <path fill="currentColor" d="M189.3 16.62c-7.8 0-14 6.16-14 14s6.2 14 14 14 14-6.16 14-14-6.2-14-14-14zm28.7 5.1c.8 2.83 1.3 5.82 1.3 8.9 0 3.11-.5 6.12-1.3 8.97 6.3.37 12.8.97 19.6 1.81-.3-1.57-.4-3.17-.4-4.81 0-4.59 1-8.95 2.8-12.91-7.6-.93-14.9-1.58-22-1.96zm53.2.87c-7.8 0-14 6.16-14 14s6.2 14 14 14 14-6.16 14-14-6.2-14-14-14zm-115.5 3.32c-10.2 2.1-19.8 4.86-28.6 8.19 3.9 4.51 6.6 10.1 7.5 16.25 7.3-2.7 15.1-4.99 23.5-6.78-1.8-3.97-2.8-8.35-2.8-12.95 0-1.6.1-3.17.4-4.71zm145.5 10.64v.1c0 6.31-1.9 12.2-5.1 17.18 4.2 1.19 8.3 2.45 12.6 3.8l.1.1h.2c1.4.39 2.8.79 4.2 1.18.3-6.31 2.5-12.16 6-17.01-1.7-.5-3.5-.99-5.3-1.48-4.3-1.37-8.5-2.63-12.7-3.84zm-196.3 4.41c-7.78 0-13.94 6.16-13.94 14s6.16 14 13.94 14c7.8 0 14-6.16 14-14s-6.2-14-14-14zm242.3 5.46c-7.8 0-14 6.16-14 14s6.2 14 14 14 14-6.16 14-14-6.2-14-14-14zm29.8 17.3c-.6 6.27-3.1 12.02-6.9 16.7 6.1 3.02 11.9 6.17 17.3 9.44 1.7-5.96 5.2-11.23 9.7-15.23-6.3-3.81-13-7.45-20.1-10.91zM73.5 67.39c-6.04 5.82-11.37 11.96-15.99 18.29 6.15 1.32 11.67 4.42 15.97 8.73 3.41-4.48 7.22-8.86 11.48-13.05-5.03-3.46-9.04-8.3-11.46-13.97zm346.7 17.22c-7.8 0-14 6.16-14 14 0 7.89 6.2 13.99 14 13.99s14-6.1 14-13.99c0-7.84-6.2-14-14-14zm-147 4.99c-7.8 0-14 6.16-14 14 0 7.9 6.2 14 14 14s14-6.1 14-14c0-7.84-6.2-14-14-14zm-32.8 5.32c-6.2 1.54-12.5 3.58-18.7 5.98 4 4.5 6.7 10.2 7.6 16.4 3.9-1.5 7.7-2.7 11.5-3.8-1-3.1-1.6-6.4-1.6-9.9 0-3 .4-5.91 1.2-8.68zm62.6 5.28c.1 1.1.2 2.3.2 3.4 0 5.3-1.3 10.3-3.6 14.7 3.3 1.2 6.7 2.4 10.1 3.8.9-6.2 3.7-11.8 7.7-16.4-4.8-2-9.7-3.8-14.4-5.5zM52.86 103c-7.84 0-14 6.2-14 14s6.16 14 14 14 14-6.2 14-14-6.16-14-14-14zm146.84 5c-7.8 0-14 6.2-14 14s6.2 14 14 14 14-6.2 14-14-6.2-14-14-14zm141.6 5c-7.8 0-14 6.2-14 14s6.2 14 14 14 14-6.2 14-14-6.2-14-14-14zm104.4 1.9c-3.1 5.2-7.7 9.5-13.1 12.3 3.6 4.3 6.8 8.6 9.8 13.1 4.7-3.8 10.5-6.3 16.8-6.9-3.9-6.4-8.4-12.6-13.5-18.5zm-279.1 14.7c-5.8 3.6-11.5 7.2-17.1 10.9 4.6 3.9 8.1 9.1 9.9 15.1 5.4-3.5 10.8-7 16.3-10.4-4.4-4.2-7.6-9.6-9.1-15.6zm205.5 6.1c-1.7 6-5.2 11.3-9.7 15.3 2.8 2.1 5.5 4.3 8.1 6.6 3.2-5.3 7.9-9.6 13.5-12.3-3.9-3.3-7.8-6.5-11.9-9.6zm-337.96 8.5c-1.08 10.2-.57 19.9 1.67 28.7 4.3-4.9 10.04-8.4 16.52-10-.61-4.3-.79-9-.48-13.9h-.99c-6.11 0-11.84-1.7-16.72-4.8zm96.56 6.5c-7.8 0-14 6.2-14 14s6.2 14 14 14 14-6.2 14-14-6.2-14-14-14zm333.7.5c-7.8 0-14 6.2-14 14s6.2 14 14 14 14-6.2 14-14-6.2-14-14-14zm-64.5 8.9c-7.8 0-14 6.2-14 14s6.2 14 14 14 14-6.2 14-14-6.2-14-14-14zm-302 13c-3.58 2-6.99 3.8-10.21 5.3 2.59 4.7 4.08 10 4.08 15.6 0 .8 0 1.6-.1 2.4.65-.3 1.3-.6 1.96-.9 4.44-2 8.97-4.4 13.67-7.1-4.5-4-7.76-9.3-9.4-15.3zM61.77 180c-7.84 0-14 6.2-14 14s6.16 14 14 14 14-6.2 14-14-6.16-14-14-14zm416.13 13.2c-4.6 2.5-9.9 4-15.5 4-.8 0-1.6 0-2.3-.1.1 6.1-.4 12.3-1.4 18.6 6.4.3 12.4 2.4 17.3 5.9 0-.3.1-.7.2-1l.1-.1v-.1c1.5-9.2 2-18.3 1.6-27.2zm-59.5 5.4c-4.7 4-10.5 6.6-16.9 7.3.9 5.6.9 11.3 0 17.4 6.3.8 12.1 3.4 16.8 7.3 2.4-11.1 2.3-21.9.1-32zM49.64 224.3c.29 4.9.67 9.7 1.14 14.5 3.97-1.8 8.36-2.8 12.96-2.8 1.65 0 3.27.1 4.86.4-.36-3.8-.67-7.6-.91-11.4-2.54.7-5.19 1-7.92 1-3.54 0-6.94-.6-10.13-1.7zm409.86 9.4c-7.8 0-14 6.2-14 14s6.2 14 14 14 14-6.2 14-14-6.2-14-14-14zm-59.7 7.4c-7.8 0-14 6.2-14 14s6.2 14 14 14 14-6.2 14-14-6.2-14-14-14zM65.74 254c-7.84 0-14 6.2-14 14s6.16 14 14 14 14-6.2 14-14-6.16-14-14-14zm301.46 10.5c-4.8 1.6-10.1 2.9-15.8 3.9 1.6 3.9 2.5 8.1 2.5 12.5 0 1.9-.2 3.7-.5 5.5 8.6-1.5 16.9-3.5 24.5-6.3-5-4-8.7-9.4-10.7-15.6zm-43.3 2.4c-7.8 0-14 6.2-14 14s6.2 14 14 14 14-6.2 14-14-6.2-14-14-14zm111.2 3.6c-2.7 4.5-5.6 9.1-8.6 13.8l-4.8 7.2c5.9 1.7 11.2 5.1 15.2 9.7 1.6-2.4 3.2-4.7 4.7-7.1 3.3-5.1 6.5-10.1 9.4-15.1-6.1-1.2-11.6-4.3-15.9-8.5zm-144.6 4.1c-7.5.5-15.1 1.1-22.4 1.9l-2.7.3c1.7 3.8 2.6 8.1 2.6 12.5 0 1.8-.2 3.6-.5 5.4.9-.1 1.7-.2 2.5-.3 7.1-.7 14.5-1.3 22.1-1.9-1.4-3.6-2.2-7.5-2.2-11.6 0-2.2.2-4.3.6-6.3zm-52.5.7c-7.8 0-14 6.2-14 14s6.2 14 14 14 14-6.2 14-14-6.2-14-14-14zM80.65 295.1c-4.92 3.1-10.72 4.9-16.91 4.9h-.4c2.55 7.6 5.52 15 8.93 22.2 3.98-4.6 9.24-8.1 15.21-9.9-2.56-5.6-4.82-11.3-6.83-17.2zm124.65 3.2c-.2.3-.5.5-.7.8-7 8-10.3 19.1-8.8 31.5.3 2.3.7 4.6 1.2 7 4.9-3.5 10.9-5.5 17.2-5.7-.2-1.2-.4-2.3-.5-3.4-.8-6.5.1-10.8 2.1-14.4-4.9-4-8.6-9.5-10.5-15.8zm209.5 9.9c-7.8 0-14 6.2-14 14s6.2 14 14 14 14-6.2 14-14-6.2-14-14-14zM98.5 329c-7.84 0-14 6.2-14 14s6.16 14 14 14c7.8 0 13.9-6.2 13.9-14s-6.1-14-13.9-14zm286.5 8.9c-5 5.4-10 10.6-15.2 15.6 5 3.4 9 8.3 11.4 14 5.7-5.5 11.3-11.2 16.7-17-5.4-2.9-9.9-7.3-12.9-12.6zm-167.9 12c-7.8 0-14 6.2-14 14s6.2 14 14 14 14-6.2 14-14-6.2-14-14-14zm-92.1 10l-18.8 14.7c-3.1 10.1 17.2 101.1 37.8 120.8l4.5-5.4-13.5-61.8 20.5 54.8c.4-.3 3.3-2.3 3.7-2.6l-8.6-25.7 13.9 21.7c8.5-5.7 17.3-8.2 34.3-9.7l-15.9-30.8 31.1 30.2c8.2 0 17.5.5 28 1.5-23.3-28.8-84.4-98.5-117-107.7zm228.7 5.9c-7.8 0-14 6.2-14 14s6.2 14 14 14 14-6.2 14-14-6.2-14-14-14zm-112.5 16.5c-3.4 4.9-8.2 8.8-13.8 11.1 5 5.4 10.3 9.9 15.8 13.5.4-6.4 2.6-12.3 6.1-17.1-2.7-2.2-5.4-4.6-8.1-7.5zm80.1 7.3c-5.6 2.9-11 5.3-16.4 7.1 1.5 3.6 2.3 7.6 2.3 11.8 0 2.3-.2 4.5-.7 6.6 8.5-2.4 16.8-6 25.1-10.4-4.8-3.9-8.4-9.1-10.3-15.1zm-44.1 4.9c-7.8 0-14 6.2-14 14s6.2 14 14 14 14-6.2 14-14-6.2-14-14-14z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPrayerBeadsIcon);
    
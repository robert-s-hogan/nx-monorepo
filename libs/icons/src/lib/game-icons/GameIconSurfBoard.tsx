
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSurfBoardIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'surf-board'];
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
        <path fill="currentColor" d="M432 32c-17.7 0-32 14.33-32 32s14.3 32 32 32 32-14.33 32-32-14.3-32-32-32zM119 75.4c-4.7 2.58-9.2 7.28-13.7 14.42-7.33 11.68-13.71 28.88-18.57 48.38C77 177.1 73 224.8 73 256c0 51.3 7.45 143.4 12.63 193 10.49-5.2 21.27-9.1 31.67-10 .6 0 1.1-.1 1.7-.1zm18 0v364.1c10.8 1.3 22.1 4.1 33.3 7.7C175.2 397.3 183 307 183 256c0-31.2-4-78.9-13.7-117.8-4.9-19.5-11.3-36.7-18.6-48.38-4.5-7.14-9-11.84-13.7-14.42zM320 231c-16 0-27.6 10-37.6 18s-18.5 14-26.4 14c-7.9 0-16.4-6-26.4-14-8.2-6.5-17.4-14.4-29.2-17.1.3 6.8.5 13.3.6 19.3 5.3 2.5 11.1 6.7 17.4 11.8 10 8 21.6 18 37.6 18s27.6-10 37.6-18 18.5-14 26.4-14c7.9 0 16.4 6 26.4 14s21.6 18 37.6 18 27.6-10 37.6-18 18.5-14 26.4-14c7.9 0 23.8 7 36.2 14.7 3.6 2.2 6.9 4.3 9.8 6.3v-21.5c-.1-.1-.2-.1-.3-.2C480.1 240 464 231 448 231c-16 0-27.6 10-37.6 18s-18.5 14-26.4 14c-7.9 0-16.4-6-26.4-14S336 231 320 231zm-264.35.8c-13.16 2.3-26.13 9.6-37.31 16.5-.12.1-.22.1-.34.2V270c2.94-2 6.22-4.1 9.77-6.3 8.74-5.4 19.12-10.4 27.27-13 .1-5.9.28-12.2.61-18.9zM320 311c-16 0-27.6 10-37.6 18s-18.5 14-26.4 14c-7.9 0-16.4-6-26.4-14-8.4-6.8-18-14.9-30.4-17.3-.4 6-.7 12.1-1.1 18.4 6.2 2 12.8 6.9 20.3 12.9 10 8 21.6 18 37.6 18s27.6-10 37.6-18 18.5-14 26.4-14c7.9 0 16.4 6 26.4 14s21.6 18 37.6 18 27.6-10 37.6-18 18.5-14 26.4-14c7.9 0 23.8 7 36.2 14.7 3.6 2.2 6.9 4.3 9.8 6.3v-21.5c-.1-.1-.2-.1-.3-.2C480.1 320 464 311 448 311c-16 0-27.6 10-37.6 18s-18.5 14-26.4 14c-7.9 0-16.4-6-26.4-14S336 311 320 311zm-263.27.6c-13.52 2.2-26.88 9.7-38.35 16.7-.13.1-.25.2-.38.2V350c2.95-2 6.23-4.1 9.8-6.3 9.74-6 21.49-11.6 29.95-13.7-.37-6.2-.71-12.4-1.02-18.4zM21 393v94h7.74c4.74-3.9 15.71-12.5 29.04-21.4 3.41-2.3 6.96-4.6 10.61-6.9-1.88-17.3-4.06-40.3-6.14-65.7zm172.4 0c-1.9 23.1-3.9 43.9-5.6 60.5 7.2 2.8 14.2 5.7 20.9 8.7 25.1 11 44.5 22 49.4 24.8H493v-94zm-70.5 63.8c-1.4 0-2.7.1-4 .2-12.7 1.1-34.15 12.2-51.12 23.5-8.5 5.7-16 11.3-21.38 15.5H237c-9-4.8-21.6-11.1-35.6-17.3-26.1-11.5-57.8-22.1-78.5-21.9zM31.99 496z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSurfBoardIcon);
    
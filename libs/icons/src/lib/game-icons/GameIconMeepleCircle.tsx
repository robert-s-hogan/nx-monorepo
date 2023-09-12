
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconMeepleCircleIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'meeple-circle'];
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
        <path fill="currentColor" d="M256 16c-7.5 0-12.8 3.96-16 8.88-2.7 4.42-3.8 9.56-4.1 14.12-8.4 4.2-17.8 8.41-25.3 12.71-5.9 3.61-14.4 8.59-14.6 15.49.6 5.31 7.8 7.24 11.7 8.47 4.3 1.26 9.1 2.19 13.3 2.6-4.2 7.16-9.7 13.71-14.6 19.98-5.5 7.25-10.4 14.25-10.4 21.95.1 3.3.5 6.6 4.2 6.8 10.8.3 22.4.1 33.6.1 4.9.5 7.3-1.7 9.3-5.7 2.7-5.8 6.9-14.2 12.9-20.6 5.8 6.4 9.6 13 13.1 20.5v.1c2 4.5 4.8 5.7 9.1 5.7l33.7-.1c3.6-.3 4.1-3.6 4.1-6.8 0-7.7-4.8-14.7-10.4-21.95-4.8-6.27-10.4-12.82-14.5-19.98 4.1-.41 8.9-1.34 13.2-2.6 4-1.56 11.6-3.5 11.7-8.47-1-7.92-8.9-12.21-14.5-15.49-7.6-4.3-16.9-8.51-25.4-12.71-.2-4.56-1.4-9.7-4.1-14.12-3.2-4.92-8.5-8.88-16-8.88zm138.4 92.1c-1.7 0-3.4.3-4.9 1.1-4.3 3.2-2.4 10.4-1.5 14.4 1.1 4.3 2.7 8.9 4.4 12.8-8.3-.1-16.7-1.6-24.6-2.7-9-1.1-17.5-1.9-24.2 2-2.8 1.7-5.4 3.7-3.8 7 5.2 9.5 11.2 19.5 16.8 29.2 2 4.5 5.1 5.4 9.5 5.2 6.4-.6 15.8-1.1 24.3.8-2.6 8.3-6.4 14.9-11.2 21.6l-.1.1c-2.8 4-2.5 7-.3 10.7l16.9 29.2c2.1 2.9 5.2 1.7 7.9.1 6.7-3.8 10.4-11.5 13.8-20 3.1-7.3 5.9-15.4 10.1-22.5 2.4 3.3 5.6 7 8.8 10.1 3.4 2.7 8.9 8.3 13.2 5.9 6.4-4.8 6.1-13.8 6.2-20.3-.1-8.7-1.1-18.9-1.7-28.3 3.8-2.5 7.7-6.1 10.2-10.6 2.6-5.3 3.4-11.8-.3-18.3-3.8-6.5-9.9-9.1-15.7-9.5-5.2-.1-10.2 1.5-14.3 3.6-7.9-5.2-16.2-11.3-23.7-15.6-4.6-2.5-10.5-5.9-15.8-6zm-277 .7c-5.5.2-10.8 3.5-15.1 5.9-7.57 4.4-15.82 10.4-23.78 15.6-4.07-2.1-9.01-3.6-14.22-3.5-5.89.4-11.95 2.9-15.79 9.5-3.74 6.3-2.93 12.9-.4 18.1 2.48 4.7 6.4 8.1 10.33 10.7-.63 9.3-1.8 19.7-1.75 28.2.16 7 .17 16.8 6.16 20.4 4.92 2.2 10.21-3.1 13.22-5.9 3.17-3.1 6.36-6.8 8.89-10.2 4.06 7.3 6.96 15.3 9.96 22.7 3.54 8.3 7.08 16.1 13.78 19.9 2.8 1.7 5.9 2.8 8.1-.1 5.6-9.4 11.4-19.6 17-29.3 2.8-3.9 2-7.1-.4-10.8-3.8-5.2-8.8-13.1-11.4-21.4 8.5-1.9 16.1-1.9 24.3-1.1h.1c5 .4 7.3-1.3 9.4-5.1l16.9-29.2c1.4-3.2-1.2-5.3-3.8-6.8-6.8-4-15.3-3.3-24.3-2-7.8 1-16.3 2.6-24.6 2.5 1.8-3.7 3.4-8.3 4.4-12.6.7-4.3 2.7-11.9-1.4-14.4-1.9-.8-3.8-1.1-5.6-1.1zm281.8 160.9c-1.2 0-2.3.5-3.2 1.8-5.6 9.3-11.3 19.5-16.9 29.2-2.9 3.9-2.1 7.1.3 10.8 3.7 5.2 8.8 13.1 11.4 21.4-8.4 1.9-16.1 1.9-24.3 1.1h-.1c-4.9-.4-7.3 1.3-9.4 5.1l-16.8 29.2c-1.5 3.3 1.1 5.4 3.8 6.9 6.7 3.9 15.2 3.3 24.2 2 7.9-1 16.3-2.6 24.6-2.5-1.7 3.7-3.3 8.3-4.4 12.6-.6 4.3-2.7 11.9 1.5 14.4 7.4 3.2 15-1.6 20.7-4.8 7.5-4.4 15.8-10.4 23.7-15.6 4 2.1 9.1 3.6 14.2 3.5 5.9-.4 12-2.9 15.7-9.4 3.8-6.5 3-13.1.4-18.3-2.5-4.6-6.4-8.1-10.3-10.6.6-9.4 1.7-19.7 1.7-28.3-.2-7-.2-16.8-6.1-20.4-4.9-2.1-10.2 3.1-13.2 5.9-3.2 3.1-6.4 6.8-8.9 10.2-4.1-7.2-7-15.2-10-22.6-3.5-8.4-7.1-16.1-13.8-20-1.6-.9-3.3-1.7-4.8-1.6zm-285.3.7c-1.5 0-3.2.8-4.7 1.6-6.8 3.9-10.41 11.6-13.85 20-3.05 7.3-5.88 15.4-10.07 22.6-2.4-3.4-5.57-7.1-8.71-10.1-3.44-2.8-8.97-8.3-13.27-6-6.42 4.9-6.11 13.8-6.17 20.3.1 8.8 1.09 18.9 1.62 28.4-3.8 2.5-7.62 6-10.08 10.6-2.59 5.3-3.46 11.8.29 18.3 3.62 6.4 9.73 9 15.49 9.4 5.3.2 10.21-1.5 14.43-3.6 7.75 5.2 16.14 11.4 23.52 15.6 6.2 3.4 14.7 8.3 20.8 4.9 4.3-3.2 2.4-10.4 1.5-14.4-1.1-4.3-2.7-8.9-4.4-12.8 8.3.1 16.7 1.6 24.6 2.7 9 1.1 17.5 1.9 24.2-2 2.8-1.6 5.3-3.7 3.9-7-5.3-9.5-11.3-19.6-16.9-29.3-1.9-4.4-5.1-5.3-9.5-5.1-6.4.7-15.7 1.1-24.2-.8 2.5-8.3 6.4-14.9 11.2-21.6v-.1c2.8-4.1 2.5-6.9.3-10.7L117 272.1c-.9-1.2-2-1.7-3.1-1.7zm163.2 114.1c-3.7.1-5.8 2.3-7.5 5.8-2.6 5.8-6.9 14.1-12.8 20.5-5.9-6.3-9.7-13-13.1-20.5h-.1c-2.1-4.5-4.7-5.7-9.1-5.6h-33.7c-3.5.3-4 3.6-4 6.7 0 7.8 4.8 14.8 10.4 22 4.8 6.3 10.4 12.8 14.5 20-4.1.4-8.9 1.3-13.1 2.5-4.1 1.6-11.7 3.6-11.8 8.5 1 8 8.9 12.2 14.5 15.5 7.6 4.3 16.9 8.5 25.4 12.8.2 4.5 1.4 9.6 4.1 14 3.3 4.9 8.5 8.9 16 8.9 7.4.1 12.7-3.9 15.9-8.7 2.8-4.5 3.8-9.6 4.1-14.3 8.4-4.1 17.9-8.3 25.3-12.6 6-3.7 14.5-8.6 14.6-15.5-.6-5.3-7.8-7.3-11.7-8.5-4.3-1.2-9.1-2.2-13.3-2.6 4.2-7.2 9.7-13.7 14.6-20 5.5-7.2 10.4-14.2 10.4-21.9 0-3.3-.5-6.5-4.1-6.9-10.9-.2-22.6 0-33.8 0-.6-.1-1.2-.1-1.7-.1z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconMeepleCircleIcon);
    
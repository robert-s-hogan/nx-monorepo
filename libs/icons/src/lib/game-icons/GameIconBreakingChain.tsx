
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBreakingChainIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'breaking-chain'];
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
        <path fill="currentColor" d="M64.746 18l20.988 21a33 33 0 0 1-15.42 55.27l18.48 18.48A57 57 0 0 0 102.706 22l-4.002-4H64.746zM52.395 28.39A56.82 56.82 0 0 0 38.485 119l88 87.94a79.82 79.82 0 0 1 7.51-26.33L55.454 102a32.87 32.87 0 0 1 .06-46.48A29.53 29.53 0 0 1 70.876 47l-18.48-18.61zm82.47 25.78c.254 2.307.4 4.64.44 7a73.06 73.06 0 0 1-3.58 23.83l72.82 72.82a33 33 0 0 1-22.55 56.18 24.19 24.19 0 0 0 7.06 18.77l4 4a57 57 0 0 0 28.49-96l-86.68-86.6zm136.649 24.892l-.92 48.862 23.996.453.92-48.861-23.996-.454zm81.998 11.493l-27.662 45.174 20.468 12.533 27.66-45.174-20.466-12.533zm60.017 53.888l-44.71 20.744 10.1 21.772 44.712-20.744-10.102-21.772zM180.895 156.85a63.6 63.6 0 0 0-16.23 9.92 61.718 61.718 0 0 0-4.06 3.71 64.09 64.09 0 0 0-4.28 85.78 65 65 0 0 0 4.4 4.87l92.15 92.15a64.41 64.41 0 0 0 13.71 10.45 73.23 73.23 0 0 1-6.59-37.35l-82.27-82.27a40.9 40.9 0 0 1-2.76-3 39.461 39.461 0 0 1-2.39-3.25 40 40 0 0 1 5-50.41c.8-.8 1.63-1.55 2.48-2.26a40 40 0 0 1 17.46-8.55 16.78 16.78 0 0 0-4.33-7.5l-12.29-12.29zm71.34 7.78a73.52 73.52 0 0 1 1.25 26l17.39 6.37a12 12 0 1 0 8.27-22.49v.03l-26.91-9.91zm137.71 52.036l-.728 23.988 45.638 1.387.729-23.988-45.639-1.387zm-61.148 10.85a12 12 0 0 0-11.332 16.064l18.37 50.52a40.19 40.19 0 0 1-9.44 42.08l-.09.09a40.41 40.41 0 0 1-7.56 5.94 16.73 16.73 0 0 0 1.91 2.31l15.14 15.14a64.81 64.81 0 0 0 7.48-6.42l.09-.09a64.27 64.27 0 0 0 15-67.28l-18.42-50.57a11.94 11.94 0 0 0-2.47-4.05 12.07 12.07 0 0 0-7.48-3.67 12 12 0 0 0-1.198-.064zm-15.442 51.734a57 57 0 0 0-20.85 93.75l4.29 4.29 81 81a77.08 77.08 0 0 1 3.14-30.7v-.05l-52.29-52.29-19.22-19.22a33 33 0 0 1 11-53.85c0-.1-.06-.21-.1-.31l.25.25c.66-.26 1.33-.5 2-.72a.93.93 0 0 0 0-.22c-.42.14-.85.27-1.27.42-.1-.6-.31-1.31-.54-1.97l-7.41-20.38zm64.13 17.5l-.06.06a79.64 79.64 0 0 1 .73 11.37 94 94 0 0 1-.75 10.29 80.74 80.74 0 0 1-2 10.14l52.29 52.29 30.91 30.91a33 33 0 0 1-15.42 55.29l18.48 18.48a57 57 0 0 0 13.91-90.74l-17.09-17.09-81-81zm45.03 101.6a55 55 0 0 0-13.85 10.19 57.05 57.05 0 0 0-.06 80.55l4.9 4.91h33.915l-21.875-21.88a33 33 0 0 1 15.45-55.29l-18.48-18.48z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBreakingChainIcon);
    
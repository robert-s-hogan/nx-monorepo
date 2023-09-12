
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconRollerSkateIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'roller-skate'];
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
        <path fill="currentColor" d="M111.6 97c-9.6 56.8-26.44 107.6-37.53 154.8 11.74 42.3 38.23 74.8 80.23 99.2h230.3c3.2-16.5 6.2-34.7 12.5-51.8 5-13.5 12.3-26.5 23.6-36.6-8.2-2.2-18-4.2-29.8-5.7h-.2c-33.5-4.8-59.6-8.9-80-15.4-18 3.5-33.9 4.3-48.1 1.3-15.1-3.2-28.2-11.2-38.2-23.7-19-23.9-28.2-62.8-32.8-122.1zm98.1 0c4.7 57.2 14.3 92.7 28.8 110.9 7.7 9.6 16.3 14.8 27.8 17.3 4.1.9 8.6 1.3 13.5 1.4-3.8-2.8-7.4-5.9-10.6-9.4-21.7-23.3-26.7-59.1-29.7-120.2zm231.1 173.2c-13.5 7.9-21.3 20-26.8 35.2-5.1 13.9-8 29.9-11 45.6h60v-39c0-15-2.1-25.4-11.2-34.2-2.8-2.6-6.4-5.2-11-7.6zM67.31 285c-3.74 22.6-5.34 44.5-3.19 66H122c-24-18.2-42.43-40.3-54.69-66zM65 369v14h398v-14zm23 32c-21.65 0-39 17.4-39 39s17.35 39 39 39c21.6 0 39-17.4 39-39s-17.4-39-39-39zm112 0c-21.6 0-39 17.4-39 39s17.4 39 39 39 39-17.4 39-39-17.4-39-39-39zm112 0c-21.6 0-39 17.4-39 39s17.4 39 39 39 39-17.4 39-39-17.4-39-39-39zm112 0c-21.6 0-39 17.4-39 39s17.4 39 39 39 39-17.4 39-39-17.4-39-39-39zM88 424a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm112 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm112 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm112 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconRollerSkateIcon);
    
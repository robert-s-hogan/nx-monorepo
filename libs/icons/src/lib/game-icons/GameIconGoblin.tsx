
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconGoblinIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'goblin'];
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
        <path fill="currentColor" d="m256 415-142.9-46.7 10.2-49.7S-3.386 356.1 26 71.4l123.6 148.9L256 200.1l106.4 20.2L486 71.4c29.4 284.7-97.3 247.2-97.3 247.2l10.2 49.7zm0-98.4-35.8 1.8-19.7 35.5-27-33.3-20.8 1.1c3.5 38.6 41.2 54.8 94.3 60.9l12.4-24.8 25.4 21.9c42.5-7.8 71.4-24.4 74.5-58l-22.1-1.1-36.3 31.4-12.7-33.8zm183.4-103.4c10.4 67.8-36.1 71.9-36.1 71.9l2.7 12.2s74.2 3.2 61.8-162.1l-85.1 107.9zm-310.1 29.9L44.24 135.2C31.75 300.5 106 297.3 106 297.3l2.7-12.2s-46.46-4.1-36.09-71.9zm146 42.1 31.4.5 12.1-13.1 15.3 13.2 31.3.4c-9.2-43.1-73.9-69-90.1-1zm-128.7 1 31.3-.4 15.3-13.2 12.1 13.1 31.4-.5c-16.2-68-80.9-42.1-90.1 1z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconGoblinIcon);
    

  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconWindowBarsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'window-bars'];
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
        <path fill="currentColor" d="M247 25.148c-15.572.503-31.055 2.31-46 5.424V55h46V25.148zm18 0V55h46V30.572c-14.945-3.115-30.428-4.92-46-5.424zm-82 9.9c-16.506 4.784-32.067 11.272-46 19.473V55h46V35.049zm146 0V55h46v-.479c-13.933-8.201-29.494-14.689-46-19.472zM111.73 73C87.921 94.666 73 123.662 73 160v23h46V73h-7.27zM137 73v110h46V73h-46zm64 0v110h46V73h-46zm64 0v110h46V73h-46zm64 0v110h46V73h-46zm64 0v110h46v-23c0-36.338-14.921-65.334-38.73-87H393zM73 201v110h46V201H73zm64 0v110h46V201h-46zm64 0v110h46V201h-46zm64 0v110h46V201h-46zm64 0v110h46V201h-46zm64 0v110h46V201h-46zM73 329v110h46V329H73zm64 0v110h46V329h-46zm64 0v110h46V329h-46zm64 0v110h46V329h-46zm64 0v110h46V329h-46zm64 0v110h46V329h-46zM41 457v30h430v-30H41z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconWindowBarsIcon);
    
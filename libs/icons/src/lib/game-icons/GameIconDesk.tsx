
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconDeskIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'desk'];
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
        <path fill="currentColor" d="M104.998 104.998v110.004h206.004V104.998H104.998zm288 112v46.004h30.004v-46.004h-30.004zm-194.512 16l-8.668 26.004h36.364l-8.668-26.004h-19.028zm-157.488 44v18.004h430.004v-18.004H40.998zm14.004 36V496h17.996V371.729l58.73-58.731h-25.453l-33.277 33.277v-33.277H55.002zm289.996 0v46.004h94.004v-46.004h-94.004zM394.271 320a10.272 8 0 0 1 10.272 8 10.272 8 0 0 1-10.272 8A10.272 8 0 0 1 384 328a10.272 8 0 0 1 10.271-8zm-49.273 56.998v46.004h94.004v-46.004h-94.004zM394.271 384a10.272 8 0 0 1 10.272 8 10.272 8 0 0 1-10.272 8A10.272 8 0 0 1 384 392a10.272 8 0 0 1 10.271-8zm-49.273 56.998v46.004h94.004v-46.004h-94.004zM394.271 448a10.272 8 0 0 1 10.272 8 10.272 8 0 0 1-10.272 8A10.272 8 0 0 1 384 456a10.272 8 0 0 1 10.271-8z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconDeskIcon);
    
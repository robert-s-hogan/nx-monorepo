
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconClapperboardIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'clapperboard'];
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
        <path fill="currentColor" d="M419.682 26.2l-8.66 2.452L32.915 135.81 55.27 214.7l386.77-109.608L419.683 26.2zm-12.41 22.224l9.074 32.014-41.086-22.942 32.013-9.072zM350.77 64.438l56.8 31.714-37.084 10.51-56.8-31.715 37.084-10.51zm-61.577 17.45l56.803 31.716-37.084 10.51-56.8-31.718 37.08-10.51zm-61.574 17.45l56.802 31.715-37.084 10.51-56.803-31.715 37.084-10.51zm-61.577 17.45l56.803 31.716-37.084 10.51-56.8-31.717 37.08-10.51zm-61.574 17.45l56.8 31.715-37.083 10.51-56.802-31.715 37.084-10.51zm-45.86 26.227l41.085 22.94-32.01 9.072-9.074-32.012zM55 215v274h402V215H55zm18 18h33.273L73 266.273V233zm58.727 0h38.546l-46 46H85.727l46-46zm64 0h38.546l-46 46h-38.546l46-46zm64 0h38.546l-46 46h-38.546l46-46zm64 0h38.546l-46 46h-38.546l46-46zm64 0h38.546l-46 46h-38.546l46-46zM439 245.727V279h-33.273L439 245.727zM73 297h366v174H73V297zm248.635 46.57l-192.44.703.067 18 192.44-.703-.067-18zM130.7 391.33l-.134 17.998 92.707.703.137-18-92.71-.7zm127.155.7l-.2 18 63.913.702.2-17.998-63.913-.703z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconClapperboardIcon);
    
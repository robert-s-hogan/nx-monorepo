
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPaperTrayIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'paper-tray'];
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
        <path fill="currentColor" d="M87.902 40.998L42.25 391.002h138.566l32 48h86.368l32-48h138.568L424.098 40.998h-98.536l-16 32H202.587l-16.967-32H87.902zm-46.904 368v78.004h430.004v-78.004H340.816l-32 48H203.184l-32-48H40.998z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPaperTrayIcon);
    
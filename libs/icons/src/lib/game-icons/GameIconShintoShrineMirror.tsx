
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconShintoShrineMirrorIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'shinto-shrine-mirror'];
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
        <path fill="currentColor" d="M256 25c65.828 0 119 53.172 119 119 0 17.118-3.603 33.376-10.082 48.07-4.014 2.842-8.05 5.713-12.107 8.576C318.946 224.551 283.5 247 256 247s-62.946-22.45-96.81-46.354c-4.058-2.863-8.094-5.734-12.108-8.576C140.603 177.376 137 161.118 137 144c0-65.828 53.172-119 119-119zm187.365 144.578c.927 2.362 1.76 5.694 1.889 9.945.21 6.952-1.11 15.58-3.793 23.631-2.684 8.052-6.753 15.523-11.334 20.502C425.546 228.636 421 231 416 231h-5.563l-2.488 4.975c-8 16-11.726 23.076-16.312 27.662-4.586 4.586-11.662 8.312-27.662 16.312l-16.1 8.051 16.1 8.05s7.393 3.725 14.625 9.15c2.43 1.822 4.649 3.817 6.632 5.8h-54.96l32.001 32H149.727l32.002-32h-54.961c1.983-1.983 4.201-3.978 6.632-5.8 7.232-5.425 14.625-9.15 14.625-9.15l16.1-8.05-16.1-8.05c-16-8-23.076-11.727-27.662-16.313-4.586-4.586-8.312-11.662-16.312-27.662L101.562 231H96c-5 0-9.546-2.364-14.127-7.344-4.581-4.98-8.65-12.45-11.334-20.502-2.684-8.051-4.004-16.679-3.793-23.63.129-4.253.962-7.584 1.889-9.946 8.603 1.304 19.639 5.853 32.04 13.172 14.682 8.664 31.068 20.556 48.136 32.604C182.946 239.449 219.5 265 256 265s73.054-25.55 107.19-49.646c17.067-12.048 33.453-23.94 48.134-32.604 12.402-7.32 23.438-11.868 32.041-13.172zM317.816 279.27c-64 16-59.632 16-123.632 0l-4.368 17.46c64 16 68.368 16 132.368 0zM391 357v16H121v-16zm-16 34v16H137v-16zm80 34v62h-70.453c-127.153-15.893-129.941-15.893-257.094 0H57v-62z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconShintoShrineMirrorIcon);
    
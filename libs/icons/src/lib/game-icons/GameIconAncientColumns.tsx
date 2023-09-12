
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAncientColumnsIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'ancient-columns'];
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
        <path fill="currentColor" d="M57 39v16h110V39H57zm32 34v318h46V73H89zm334 21.56l-46 23.04V391h46V94.56zM254.2 187L233 197.6V391h46V211.7L254.2 187zM73 409v30h78v-30H73zm144 0v30h78v-30h-78zm144 0v30h78v-30h-78zM38.49 457l-10 30H483.5l-10-30H38.49z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAncientColumnsIcon);
    
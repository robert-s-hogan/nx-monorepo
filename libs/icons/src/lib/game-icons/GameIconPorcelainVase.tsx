
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPorcelainVaseIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'porcelain-vase'];
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
        <path fill="currentColor" d="M304 30c-32 64-22.35 180.063 0 208 42.406 53.007 80 80 80 128 0 32-16 80-48 112v16H176v-16c-32.002-31.995-48-80-48-112 0-48 37.594-74.993 80-128 22.35-27.937 32-144 0-208 48-16 48-16 96 0z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPorcelainVaseIcon);
    
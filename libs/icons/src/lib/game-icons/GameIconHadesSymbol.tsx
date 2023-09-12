
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHadesSymbolIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'hades-symbol'];
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
        <path fill="currentColor" d="M240 16 112 272l72.8 53 55-37.1L192 256zm32 0 48 240-144 96-64 48 144 96 144-96-64-48-8.2-5.4-56.5 41.2L288 400l-32 32-32-32 176-128z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHadesSymbolIcon);
    
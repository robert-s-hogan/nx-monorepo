
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconJerusalemCrossIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'jerusalem-cross'];
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
        <path fill="currentColor" d="M352 23v18h-78v197h197v-78h18v192h-18v-78H274v197h78v18H160v-18h78V274H41v78H23V160h18v78h197V41h-78V23zm41 41v55h55v18h-55v55h-18v-55h-55v-18h55V64zm-256 0v55h55v18h-55v55h-18v-55H64v-18h55V64zm256 256v55h55v18h-55v55h-18v-55h-55v-18h55v-55zm-256 0v55h55v18h-55v55h-18v-55H64v-18h55v-55z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconJerusalemCrossIcon);
    
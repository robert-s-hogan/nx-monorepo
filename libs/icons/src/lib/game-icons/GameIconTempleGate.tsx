
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTempleGateIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'temple-gate'];
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
        <path fill="currentColor" d="M256 26.92L28.98 183H483L256 26.92zm0 26.29L427.9 167H84.1L256 53.21zm0 21.58L143.9 149h224.2L256 74.79zM73 201v286h30V201H73zm48 0v286h126V377H137v-54h110V201H121zm144 0v122h110v54H265v110h126V201H265zm144 0v286h30V201h-30zM155 341v18h202v-18H155zm37 50c13.7 0 25 11.3 25 25s-11.3 25-25 25-25-11.3-25-25 11.3-25 25-25zm128 0c13.7 0 25 11.3 25 25s-11.3 25-25 25-25-11.3-25-25 11.3-25 25-25zm-128 18c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7zm128 0c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTempleGateIcon);
    
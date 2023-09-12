
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconSergeantIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'sergeant'];
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
        <path fill="currentColor" d="M255.978 39.21C226.38 86.89 161.383 164.77 106 203.713V256.6c53.113-38.92 105.113-92.538 140.56-145.71L256 96.735l9.44 14.157c35.333 53 87.963 106.298 140.56 145.473V203.77C349.61 164.835 285.346 86.825 255.978 39.21zm0 108.406C226.38 195.293 161.383 273.174 106 312.116v52.89C159.113 326.09 211.113 272.47 246.56 219.3l9.44-14.16 9.44 14.16c35.333 53 87.963 106.298 140.56 145.473v-52.597c-56.39-38.937-120.654-116.944-150.022-164.557zm0 107.782C226.38 303.075 161.383 380.956 106 419.898v52.89c53.113-38.918 105.113-92.536 140.56-145.707l9.44-14.16 9.44 14.16c35.333 53 87.963 106.298 140.56 145.473v-52.597c-56.39-38.938-120.654-116.945-150.022-164.558z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconSergeantIcon);
    
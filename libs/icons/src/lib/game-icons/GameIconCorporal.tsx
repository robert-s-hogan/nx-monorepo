
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconCorporalIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'corporal'];
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
        <path fill="currentColor" d="M255.978 93.103C226.38 140.78 161.383 218.66 106 257.6v52.892c53.113-38.92 105.113-92.537 140.56-145.71l9.44-14.158 9.44 14.16c35.333 53 87.963 106.296 140.56 145.47v-52.593c-56.39-38.937-120.654-116.944-150.022-164.557zm0 108.403C226.38 249.183 161.384 327.066 106 366.01v52.887c53.113-38.92 105.113-92.537 140.56-145.71L256 259.03l9.44 14.158c35.333 53 87.963 106.298 140.56 145.473v-52.594c-56.39-38.937-120.654-116.947-150.022-164.56z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconCorporalIcon);
    
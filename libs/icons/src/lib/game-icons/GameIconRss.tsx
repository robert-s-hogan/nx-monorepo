
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconRssIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'rss'];
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
        <path fill="currentColor" d="M27.906 27.28v91.44a365.765 365.765 0 0 1 365.75 365.78h91.438A457.207 457.207 0 0 0 27.906 27.28zm0 154.157v88.813a214.234 214.234 0 0 1 214.22 214.25h88.843A303.063 303.063 0 0 0 27.905 181.437zM88.75 359.125a62.703 62.703 0 0 0-60.844 62.656 62.703 62.703 0 0 0 125.375 0 62.703 62.703 0 0 0-64.53-62.655z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconRssIcon);
    

  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconElectricalSocketIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'electrical-socket'];
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
        <path fill="currentColor" d="M23 23v466h466V23H23zm233 64c93.2 0 169 75.8 169 169s-75.8 169-169 169S87 349.2 87 256 162.8 87 256 87zm0 18c-83.5 0-151 67.5-151 151 0 71.3 49.2 130.9 115.5 146.8l13.9-27.8h43.2l13.9 27.8C357.8 386.9 407 327.3 407 256c0-83.5-67.5-151-151-151zm0 30c13.7 0 25 11.3 25 25s-11.3 25-25 25-25-11.3-25-25 11.3-25 25-25zm-80 89a32 32 0 0 1 32 32 32 32 0 0 1-32 32 32 32 0 0 1-32-32 32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32 32 32 0 0 1-32 32 32 32 0 0 1-32-32 32 32 0 0 1 32-32zm-90.4 169l-6.5 13.1c5.5.6 11.2.9 16.9.9 5.7 0 11.4-.3 16.9-.9l-6.5-13.1h-20.8z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconElectricalSocketIcon);
    

  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPeruIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'peru'];
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
        <path fill="currentColor" d="M110.3 191.6c78.1 150.9 158.3 243 262 301.8l38.2-50.9c-6.7-36.9-10.5-61.8-5.7-115.7-35.8-22.4-96.9-56.4-120-105.7 21.8-50 69.6-74.6 106.8-115.4-55-22.45-105.4-40.4-142.8-78.85C238 74.16 192.5 130 155.5 154.1c-25.3-9.8-27.3-17.6-33.2-42.2-24.87 13.7-25.55 53.4-12 79.7z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPeruIcon);
    
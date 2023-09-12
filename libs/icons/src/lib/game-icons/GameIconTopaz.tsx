
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconTopazIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'topaz'];
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
        <path fill="currentColor" d="M430.516 311.484a174.516 174.516 0 0 1-349.032 0C81.484 158.019 256 26 256 26s174.516 132.02 174.516 285.484zm-52.264 0c0-35.326-12.532-73.833-37.27-114.452-22.985-37.754-51.972-69.798-72.236-90.029L256 94.303l-12.7 12.734c-20.232 20.231-49.061 52.264-72.08 89.984-24.884 40.788-37.495 79.294-37.495 114.463a122.264 122.264 0 0 0 244.527 0zm-17.983 0a104.275 104.275 0 0 1-208.55 0c0-70.81 58.21-145.518 104.326-191.746 46.588 46.498 104.224 120.645 104.224 191.746zM256.067 144.015c-33.257 35.63-87.488 103.561-87.488 167.469A87.51 87.51 0 0 0 256 398.894c-157.724-92.513-1.9-234.31.079-254.901z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconTopazIcon);
    
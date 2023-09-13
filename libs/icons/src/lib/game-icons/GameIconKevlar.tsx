
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconKevlarIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'kevlar'];
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
        <path fill="currentColor" d="M436 439.525V298.348c-30-28.235-60-56.47-60-84.706 0-56.47 30-141.176 120-169.41 0 0-30-28.237-60-28.237h-90c0 56.47-60 84.706-90 84.706s-90-28.234-90-84.705H76c-30 0-60 28.236-60 28.236 90 28.236 120 112.942 120 169.412 0 28.236-30 56.47-60 84.706v141.177c60 28.235 120 56.47 180 56.47s120-28.235 180-56.47z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconKevlarIcon);
    
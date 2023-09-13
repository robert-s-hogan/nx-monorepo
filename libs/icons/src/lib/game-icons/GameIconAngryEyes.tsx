
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAngryEyesIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'angry-eyes'];
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
        <path fill="currentColor" d="M112 163.033c-19.63 0-51.214 12.034-48 32 68.42 18.54 123.27 48.386 176 80-42.956-51.378-108.988-112-128-112zm288 0c-19.012 0-85.044 60.622-128 112 52.73-31.614 107.58-61.46 176-80 3.214-19.966-28.37-32-48-32zm-303.973 97.21c-6.303.084-11.67 1.557-17.443 4.77-7.63 4.243-16.252 12.463-26.588 25.423 12.406 12.91 28.615 30.222 52.395 37.37 25.15 7.556 59.428 4.37 108.417-32.937-17.8-5.246-33.034-10.328-46.457-14.954 1.69 3.358 2.65 7.135 2.65 11.117 0 13.7-11.3 25-25 25s-25-11.3-25-25c0-9.878 5.874-18.506 14.287-22.553-10.365-3.466-19.044-6.044-26.39-7.27-2.916-.488-5.592-.8-8.106-.917-.942-.044-1.862-.06-2.763-.05zm319.946 0c-.9-.01-1.82.006-2.764.05-2.515.117-5.19.43-8.106.916-7.347 1.226-16.026 3.804-26.39 7.27 8.412 4.047 14.286 12.675 14.286 22.553 0 13.7-11.3 25-25 25s-25-11.3-25-25c0-3.982.96-7.76 2.65-11.117-13.423 4.626-28.658 9.708-46.457 14.953 48.99 37.307 83.268 40.492 108.416 32.935 23.78-7.147 39.988-24.458 52.394-37.37-10.336-12.96-18.96-21.18-26.588-25.423-5.773-3.212-11.14-4.685-17.443-4.768z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAngryEyesIcon);
    
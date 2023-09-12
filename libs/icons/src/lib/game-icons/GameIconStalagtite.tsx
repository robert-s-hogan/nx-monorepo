
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconStalagtiteIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'stalagtite'];
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
        <path fill="currentColor" d="M79.186 18.924l76.447 168.373 16.05 168.137 20.114 32.222 23.72 68.82 37.92 38.567 29.07-17.904 18.52-92.8 16.754-76.785-48.14 14.57 15.52 20.63-54.84 71.32-12.01-19.24 23.417-81.884 14.136-4.73-.402-1.327 72.74-22.018 42.894-62.197 23.195-85.364-24.976-3.94-33.04 51.25-15.706-10.128 34.256-53.137L333.27 18.923H189.423l37.94 89.09-60.132 59.62-67.52-148.71H79.187zm273.183 0l20.206 96.045 26.643 4.202 27.24-100.248h-74.09zm-74.48 31.55h.003l36.498 81.096-18.652 46.006-38.338-56.228 20.49-70.875zm-61.468 94.706l33.047 44.697-42.966 14.643 62.133 63.26-5.39 18.26-26.063 8.724-59.164-69.618-3.655-38.267 42.057-41.7zm-35.3 112.476l42.634 50.166-18.777 65.658-15.113-24.207-8.746-91.617z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconStalagtiteIcon);
    

  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconPylonIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'pylon'];
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
        <path fill="currentColor" d="M160 15.78l-37.4 56.07-8 1.5-.6-.13-.1.24-98.05 18.25L39 104.6V160h18v-45.3l68.7 38.3h12.4l40.3 94H96v18h23v39h18v-39h42.8l-64 208h82.5L256 314.3 313.7 473h82.5l-64.1-208H375v39h18v-39h23v-18h-82.4l40.3-94h12.4l68.7-38.3V160h18v-55.4l23.2-12.89-98.1-18.25-.1-.24-.6.13-8-1.5L352 15.78 315.2 71H196.8L160 15.78zm0 32.44L175.2 71h-30.4L160 48.22zm192 0L367.2 71h-30.4L352 48.22zM183.2 89h145.6L256 105.6 183.2 89zm-69 2.73l101.2 23.07-86.1 19.6-61.15-34.1 46.05-8.57zm283.6 0l46 8.57-61.1 34.1-86.1-19.6 101.2-23.07zM256 124.1l47.9 10.9h-95.8l47.9-10.9zM165.8 153h43.1l-15.1 28.1-28-28.1zm63.6 0h53.2l22.3 41.3-48.9 49-48.9-49 22.3-41.3zm73.7 0h43.1l-28 28.1-15.1-28.1zm-132.4 30.4l63.6 63.6h-36.4l-27.2-63.6zm170.6 0L314.1 247h-36.4l63.6-63.6zM203.4 265h51.4l-31.3 85.9-20.1-85.9zm53.8 0h51.4l-20.1 85.9-31.3-85.9zm-66.4 25.4l19.8 84.6h-45.8l26-84.6zm130.4 0l26 84.6h-45.8l19.8-84.6zM159.3 393h48.9l-22.5 62h-45.5l19.1-62zm144.5 0h48.9l19.1 62h-45.5l-22.5-62z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconPylonIcon);
    
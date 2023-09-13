
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconHabitatDomeIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'habitat-dome'];
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
        <path fill="currentColor" d="M256 32.951l116.926 35.666 83.185 88.81 30.06 112.33-24.831 8.839-87.744-66.914-25.073 107.062-14.076 5.01H319.15L256 229.367l-63.15 94.387h-15.297l-14.076-5.01-25.073-107.062-87.744 66.914-24.832-8.838 30.06-112.33 83.186-88.81zm0 18.819l-71.54 21.822 24.51 3.738.157-.246.139.291L256 84.502l46.734-7.127.14-.291.155.246 24.51-3.738zm108.672 34.367L313.6 93.926l51.023 80.113 18.404-68.305zm-217.344 0l-18.355 19.597 18.404 68.305L198.4 93.926zm146.026 10.877L256 102.71l-37.354-5.697L256 175.217zm11.771 17.115l-42.479 88.933 90.342-13.779zm-98.25 0l-47.863 75.154 90.342 13.78zm190.629 7.06l-15.992 59.352 51.133-21.836zm-283.008 0l-35.14 37.516 51.132 21.838zm327.492 53.098l-56.248 24.02 78.75 60.054zm-371.976 0L47.51 258.361l78.75-60.054zM356.203 207l-84.851 12.941 60.607 90.588zm-200.406 0l24.244 103.53 60.607-90.589zM487 288.264v32.14L334.447 375H177.553L25 320.404v-32.14l149.447 53.49h163.106zM328.193 393l13.43 94H170.377l13.428-94z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconHabitatDomeIcon);
    
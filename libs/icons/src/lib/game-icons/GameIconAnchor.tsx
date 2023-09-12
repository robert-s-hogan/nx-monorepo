
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconAnchorIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'anchor'];
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
        <path fill="currentColor" d="M90.53 23c-18.345 0-36.688 7.002-50.686 21-27.996 27.996-27.994 73.38 0 101.375 21.776 21.776 54.08 26.603 80.53 14.5l53.69 53.688c-21.425 19.696-44 38.257-67.44 55.937l30.126 30.125c18.734-22.545 37.953-44.474 57.844-65.53l169.594 169.593c-51.845 40.444-120.866 53.838-192.813 42.562L173 424.906 72.47 404.47l95.405 88.405 1.97-26c86.593 36.97 177.603 34.61 241.343-11.75l63.062 21.313-21.47-63.594c44.61-63.62 46.408-153.412 9.908-238.875l26.03-1.97-88.406-95.375 20.438 100.53 21.344-1.624c11.278 71.983-2.168 141.017-42.656 192.876l-169.782-169.75c21.075-20.34 42.93-39.665 65.78-57.72l-30.123-30.124c-17.015 24.154-35.673 46.66-55.688 67.813l-53.97-53.97C167.834 98.183 163.032 65.814 141.22 44c-14-13.998-32.343-21-50.69-21zm0 27.03c11.434.002 22.872 4.34 31.595 13.064 17.447 17.447 17.446 45.742 0 63.187-17.446 17.447-45.71 17.447-63.156 0-17.447-17.444-17.448-45.74 0-63.186C67.69 54.37 79.097 50.03 90.53 50.03z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconAnchorIcon);
    
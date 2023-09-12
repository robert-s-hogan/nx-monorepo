
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const GameIconBlackBookIcon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', 'black-book'];
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
        <path fill="currentColor" d="M102.594 25.97l90.062 345.78L481.844 395 391.75 49.22 102.594 25.97zm-18.906 1.593c-30.466 11.873-55.68 53.098-49.75 75.312l3.25 11.78c.667-1.76 1.36-3.522 2.093-5.28C49.19 85.668 65.84 62.61 89.657 50.47l-5.97-22.907zm44.937 18.906l247.813 21.593 80.937 305.156-249.344-20.064L128.626 46.47zM94.53 69.155c-16.66 10.01-29.916 28.068-38 47.406-5.245 12.552-8.037 25.64-8.75 36.532l64.814 235.28c.293-.55.572-1.105.875-1.655 10.6-19.254 27.822-37.696 51.124-48.47L94.53 69.156zm74.876 287.563c-17.673 9.067-31.144 23.712-39.562 39-4.464 8.105-7.262 16.36-8.688 23.75l11.688 42.405 1.625.125c-3.825-27.528 11.382-60.446 41.25-81.03l-6.314-24.25zm26.344 34.03c-32.552 17.26-46.49 52.402-41.844 72.906l289.844 24.53c-5.315-7.75-8.637-17.84-8.594-28.342l-22.562-9.063 46.625-7.31-13.595-12.97c5.605-6.907 13.688-13.025 24.78-17.656L195.75 390.75z"/>
      </svg>
    );
  };
  
  export default IconWrapper(GameIconBlackBookIcon);
    